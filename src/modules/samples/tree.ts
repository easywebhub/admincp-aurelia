import { PLATFORM } from 'aurelia-pal';

const $ = PLATFORM.global.$

export class EwTree {
  constructor(){
    
  }  
  activate() {
 
  }
  public data:any;
  onSelectionChanged = (e: JQueryEventObject, data: any) => {
    console.group("Selection was changed");
    console.log(this);
    console.log(e);
    console.log(data);
    console.groupEnd();
  }
 
  onNodeMoved = (e: JQueryEventObject, data: any) => {
    console.group("Node was moved");
    console.log(e);
    console.log(data);
    console.groupEnd();
  }
  public jstreeConfig = {
    plugins: ["dnd"],
    core: {
      check_callback: function (operation, node, node_parent, node_position, more) {
        // operation can be 'create_node', 'rename_node', 'delete_node', 'move_node' or 'copy_node'
        console.log(operation);
        if (operation === "move_node") {
          console.group("D&D");
          console.log("node", node);
          console.log("parent", node_parent);
          console.log("position", node_position);
          console.log("more", more);
          console.log(node_parent.original.isFolder);
          console.groupEnd();
          
          return node_parent.original.isFolder === true; //only allow dropping inside folders
        }
        return true;  //allow all other operations
      }
    },
    dnd: {
      check_while_dragging: true
    }
  }
  attached() {
    this.data = [
     {
       text: "Root folder",
       state: { opened: true },
       isFolder: true,
       children: [
         {
           text: "File 1",
           state: { selected: true },
           icon: "jstree-file"
         },
         {
           text: "File 2",
           icon: "jstree-file"
         },
         {
           text: "Subfolder",
           state: { opened: false },
           icon: "jstree-folder",
           children: [],
           isFolder: true
         }
       ]
     }
   ];
  }
}    
