import React ,  { Component} from 'react'
import Data from "./Article.json"
import "./Article.css"
import 'font-awesome/css/font-awesome.min.css';
import NewItem from '../NewArticle/NewItem';


class Article extends Component {

    constructor(props) {
        super(props);
        this.state = {
          articleData: Data,
          addNew: false,
          row: {},
          sort:'',
          likes:[],
          
          
        }
     
        this.addNewRow = this.addNewRow.bind(this);
        this.submitData = this.submitData.bind(this);
        this.getData = this.getData.bind(this);
        this.likes=this.likes.bind(this);
      }

    componentDidMount() {
      
        let { articleData,likes } = this.state;
       
        likes=articleData.map(p=>p.likes)
        this.setState({likes});
        if(!localStorage.getItem('articleData')) {
          localStorage.setItem('articleData', JSON.stringify(articleData));
        }
      }
    
      
      addNewRow() {
        this.setState({ 
          addNew: true,
        });
      }
    getData(e, type) {
        const { row } = this.state;
        const data = {};
        data[type] = e.target.value;
        this.setState({
          row: {...row, ...data}
        })
      }
    
      submitData() {
        const { row } = this.state;
        const newObj = { likes: 0, display: false, ...row };
        const localData = [...JSON.parse(localStorage.getItem('articleData')), newObj]
        this.setState({
          articleData: localData,
          addNew: false,
        });
    
        localStorage.setItem('articleData', JSON.stringify(localData));
      }

    likes(data, type) {
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



         handleSort=(e)=>{
           console.log(e.target.value)
         this.setState({sort:e.target.value})
        //    const { likes } = this.state;
        //  likes.sort((a, b) => a - b)    
        // this.setState({ likes })

        this.state.articleData.filter(articleData => articleData.likes).map(filteredLikes => (
         
         
            console.log(filteredLikes.likes)
          
        ))
          // this.state.articleData.map((a,b) => {
          //  const c = a.likes-b.likes;
          //  console.log("sorted array " + c)
          //   return c

            
          // });
          //   console.log("sorted")

        }   

        
        
       
         

    render() {
      
      
        const { articleData, addNew } = this.state;
       const articleData2 = (!localStorage.getItem('articleData')) ? articleData : JSON.parse(localStorage.getItem('articleData'));
        
        return (
            
        <div className="hole">
          <h2>Add Your New Article Here</h2>
            
                           {/* <span>Employee ID {navigate.location.state.EID}  </span> */}
                           { <p className="profile">{` Your Employee ID is : ${this.props.id}`}</p>}
              
            {addNew ? <NewItem 
        getData = {this.getData}
        submitData = {this.submitData}
        /> : articleData2.map((item)=>{
                   return(
                       <div className="card">
                          
                          <div key={item.ID}>
                          
                             <h2 className="title">{item.ID}.{item.Title}</h2>
                             <h5 className="content">{item.Description}</h5>
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
                              
                        </div>
                        
                   )
               })} 
               {!addNew && <button className="rdr_btn" onClick={()=> this.addNewRow()}>Add New</button>}
                          
       </div>
            
        );
    }
}

export default Article;