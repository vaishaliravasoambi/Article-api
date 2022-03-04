import React ,  { Fragment, useState, useEffect} from 'react'
// import Data from "./Article.json"
import "./Article.css"
import 'font-awesome/css/font-awesome.min.css';
import NewItem from '../NewArticle/NewItem';
import axios from 'axios';
// const article=Data.article;
const Article = (props)=> {

  const [articles,setArticles] = useState([]);
  const [addNew,setAddNew] = useState(false);
  const [loading,setLoading] = useState(false);

      useEffect(() => {
        const url = "http://localhost:3002/articles/";
    
        console.log('effect')
        axios
          .get(url)
          .then(response => {
            console.log('promise fulfilled')
            setArticles(response.data);
            setLoading(false);
          }).catch(console.log("error occured in getarticles"))
      }, []);

      console.log('render', articles.length, 'articles');
    
    
      
    const  addNewRow = (prevAddNew,props)=> {
        setAddNew(!prevAddNew);
      }

   const getData=(e, type)=> {
        const { row } = this.state;
        const data = {};
        data[type] = e.target.value;
        this.setState({
          row: {...row, ...data}
        })
      }
    
    const  submitData=() =>{
        const { row } = this.state;
        const newObj = { likes: 0, display: false, ...row };
        const localData = [...JSON.parse(localStorage.getItem('articleData')), newObj]
        this.setState({
          articleData: localData,
          addNew: false,
        });
    
        localStorage.setItem('articleData', JSON.stringify(localData));
      }

   const likes=(data, type)=> {
              let flag = null;
              const rData = JSON.parse(localStorage.getItem("articleData"));
          
              if (type === "empty")
               {
                flag = true;
                
              } else if (type === "filled") {
                flag = false;
              }
          
              const updatedData = rData.map(item => {
                    if(item.ID === data.ID) {
                      item.display = flag
                      item.likes = flag  ? (item.likes + 1) : (item.likes - 1)
                    }
                    return item;
              })
    
                this.setState({
                  articleData: [...updatedData],
                });
                localStorage.setItem("articleData", JSON.stringify(updatedData));
            }



    //  const   handleSort=(e)=>{
    //       console.log(e.target.value)
    //       this.setState({sort:e.target.value})
    //        const { likes } = this.state;
    //      likes.sort((a, b) => a - b)    
    //     this.setState({ likes })
            

    //     }    

    
      
        // const { articleData, addNew } = this.state;
      //  const articleData2 = (!localStorage.getItem('articleData')) ? articleData : JSON.parse(localStorage.getItem('articleData'));
        
      return (
        <div className="hole">
             { articles.map((item)=>{
                return(
                       <Fragment className="card">
                          <div key={item.id}>
                             <h2 className="title">{item.id}.{item.title}</h2>
                             <h5 className="content">{item.description}</h5>
                             <h4 className="tag">{item.tag}</h4>
                             <span>{item.likes}</span>
                                   {item.display ? 
                                    <span>
                                      <i className="fa fa-heart article_icon"
                                          aria-hidden="true"
                                          onClick={() => this.likes(item, "filled")}
                                      ></i>
                                    </span>:
                                     <span>
                                       <i className="fa fa-heart-o"
                                          aria-hidden="true"
                                          onClick={() => this.likes(item, "empty")}
                                        ></i>
                                    </span>}
                             
                              </div>
                        </Fragment>
                );   
               } )}
               
               {  <button className="rdr_btn" onClick={()=> this.addNewRow()}>Add New</button>}
                          
       </div>
           
        );
    
}

export default Article;