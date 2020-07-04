import React,{Component} from "react";
import MenuItem from "../menu-item/menu-item";
import "./directory.scss";

class DirectoryMenu extends Component {
    constructor() {
        super();
        this.state={
            sections:[
                {
                    id:1,
                    title:"RAM",
                    imgURL:"https://www.gigabyte.com/FileUpload/Global/KeyFeature/1271/images/mainpage.jpg",
                },{
                    id:2,
                    title:"GPU",
                    imgURL:"https://www.aorus.com/upload/Admin/images/17620530_1487693444577057_1224683349174927322_o.jpg",
                },{
                    id:3,
                    title:"Power Supply",
                    imgURL:"https://static.techspot.com/articles-info/1440/images/S-3.jpg",
                },{
                    id:4,
                    title:"Motherboard",
                    size:'large',
                    imgURL:"https://www.aorus.com/upload/Downloads/F_20190227111232AZmCCe.JPG",
                },{
                    id:5,
                    title:"Processor",
                    size:'large',
                    imgURL:"https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/05/intel-core-i9-10900k-processors-1588312349.jpg",
                },
            ],
        };
    }
    render() {
        return (<div className="dir-menu">
    {this.state.sections.map(({id,title,imgURL,size})=> <MenuItem key={id} title={title} imgURL={imgURL} size={size}/>)}
</div>);
    }
}

export default DirectoryMenu;