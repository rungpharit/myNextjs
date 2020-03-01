
import React, { Component } from 'react';

import axios from 'axios'


class Picture extends Component {
 constructor(props){
   super(props)
   
   this.state ={
     img:'',
     img2:''
   };

   this.submitpicture = this.submitpicture.bind(this);
   this.getPicture = this.getPicture.bind(this);
 }

 submitpicture(e){
   
   e.preventDefault();
   const fd = new FormData();
   fd.append('image',e.target.someExpressFiles.files[0],e.target.someExpressFiles.files[0].name)
   var reader = new FileReader();
   reader.readAsDataURL(e.target.someExpressFiles.files[0])
    reader.onload = (e) => {
      console.log('ee: ',e)
      console.log('img: ', e.target.result)
      console.log('img type: ', typeof e.target.result)
      this.setState({ img: e.target.result})
    }
   
   console.log('file: ',e.target.someExpressFiles.files[0]);
   let image = e.target.someExpressFiles.files[0]
   console.log('image: ',image)
   axios.post('http://localhost:5000/api/upload/',
    fd
).then((response) => {
    console.log('res:',response)
  })
 }

 componentDidMount(){
 
 }

 async getPicture(){
   console.log(`${this.state.img2}`)
  axios.get('http://localhost:5000/api/upload/').then((response) => {
  console.log('resdfdd:',response.data.img.data.data)
  console.log('tetet: ',typeof(response.data.img.data))
  let buff = new Buffer(response.data.img.data.data);
  console.log('tetet2: ',typeof(buff))
  let base64data = buff.toString('base64');
  console.log('tetet: ',typeof(base64data))

//   let objJsonStr = JSON.stringify(response.data.img.data.data);
// let objJsonB64 = Buffer.from(objJsonStr).toString("base64");
// console.log('tetet: ',typeof(objJsonB64))
  this.setState({img2:base64data })
  console.log('img2: ',this.state.img2)
})
// console.log('yyy: ',this.state.img2)
   
 }

  render() {
  console.log(`data:image/jpeg;base64,${this.state.img2}`)
    return (
      <div >
         <div>
        <button name="tt" value='test' onClick={this.getPicture}></button>
      </div>
        <h2>With <code>"express"</code> npm package</h2>
        <form onSubmit={this.submitpicture} encType="multipart/form-data" method="post">
          <div>Text field title: <input type="text" name="title" /></div>
          <div>File: <input type="file" name="someExpressFiles" multiple="multiple" /></div>
          <input type="submit" value="Upload" />
        </form>
        <div>
          <img src={`data:image/jpeg;base64,${this.state.img2}`}/>
        </div>

        <div >
          <img src={this.state.img}/>
        </div>
     

      </div>
    );
  }
  
}


export default Picture;


