import logo from './logo.svg';
import './App.css';
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas';


function App() {

  const savePdf = () => {
    const doc = new jsPDF('p', 'pt', 'a4');
    // window.html2canvas = html2canvas


    const el = document.getElementById('divToPrint');
    console.log('el123', el.outerHTML);

    // doc.html(el, function () {
    //   doc.save('Test.pdf');
    // });

    doc.html(`${el.outerHTML}`, {
      callback: function (doc) {
        doc.save('test.pdf');
      },
      x: 10,
      y: 10
    });

  }


  return (
    <>
      <div className="App" id="divToPrint">
        <p>This is a test app.</p>
        <p>This is a test app.</p>
        <p>This is a test app.</p>
      </div>
      <button onClick={() => savePdf()}>Print</button>
    </>
  );
}

export default App;
