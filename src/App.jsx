import { Fragment, useState } from "react";

import {AddCategory} from "./components/AddCategory" 
import {GifGrid} from "./components/GifGrid"



const App = () => {

  const [categories, setCategories] = useState(["One punch"])

  return ( 
      <Fragment>
          <h2>GifExpertApp</h2>
          <AddCategory setCategories={setCategories}/>
          <hr/>

          <ol>
             {
                  categories.map(category => 
                     <GifGrid
                          key={category} 
                          category={category}
                      />
                  )
              }
          </ol>

      </Fragment>
   );
}

export default App;

//npm run build => usamos este comando para crear una carpeta que contenga los archivos para subir a produccion
