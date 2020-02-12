import React from 'react'
import ReactDOM from 'react-dom'
// import CKEditor from '@ckeditor/ckeditor5-react'
import CKEditor from 'ckeditor4-react'

// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
function App() {
  return (
    <React.Fragment>
      <center>ckeditor5-react Demo</center>
      <div style={{margin: '2em 0'}}>
        <CKEditor
          config={{
            height: 80,

            // placeholder: "Test description and instruction in English"
          }}
          data={'Hello world'}
          onChange={event => {
            // const data = editor.getData();
            console.log(event.editor.getData())
          }}
        />
      </div>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
