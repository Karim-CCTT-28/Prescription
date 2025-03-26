


import { jsPDF } from "jspdf";
import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true })); // لبيانات النموذج المشفرة URL

// خدمة الملفات الثابتة من مجلد "public"
app.use(express.static(path.join(__dirname, 'public')));

// خدمة الملفات الثابتة من مجلد "images"
app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

let count = 0;
var person;
const doc = new jsPDF();

app.post("/",(req,res)=>{
 
  count++;

  person = {
     name : req.body["name"],
     age :   req.body["age"],
     Disease : req.body["Disease"],
     pharmaceutical : req.body["pharmaceutical"],
     Nots : req.body["nots"]
   }
   


  doc.text("  Welcome"+"\n"+
    person.name +"\n"+
    person.age+"\n"+
    person.Disease+"\n"+
    person.pharmaceutical+"\n"+
    person.Nots, 10, 10);

    doc.save("./public/PDF/Person.pdf");

    res.sendFile(__dirname+"/public/PDF/Person.pdf");
  });






   

  








app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
