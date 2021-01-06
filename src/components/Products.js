import React from 'react';
import './Products.css';

class Products extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.state.filterText = "";
      this.state.products =JSON.parse(localStorage.getItem('books')) || [
        {
          id: 1,
          reps:  '0',
          sets: '0',
          weight: 10,
          exercise: ''
        }
      ]
    };

handleSave(){
  localStorage.setItem('books' , JSON.stringify(this.state.products));
  let books = localStorage.getItem('books');
  books = JSON.parse(this.setState.products);
}



    handleRowDel(product) {
      var index = this.state.products.indexOf(product);
      this.state.products.splice(index, 1);
      this.setState(this.state.products);
    };
  
    handleAddEvent(evt) {
      var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
      var product = {
        id: id,
        exercise: "",
        sets: "",
        reps: "",
        weight: 0
      }
      this.state.products.push(product);
      this.setState(this.state.products);
    }
  
    handleProductTable(evt) {
      var item = {
        id: evt.target.id,
        name: evt.target.name,
        value: evt.target.value
      };
      var products = this.state.products;
      var newProducts = products.map(function(product) {
        for (var key in product) {
          if (key == item.name && product.id == item.id) {
            product[key] = item.value;
  
          }
        }
        return product;
      });
      this.setState(newProducts);
      console.log(this.state.products);
    };


    render() {
 
      return (
        <div className='whole'>
          <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)}
           onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)}
            products={this.state.products} filterText={this.state.filterText}
            onSave={this.handleSave.bind(this)}/>
        </div>
      );
  
    }
  } //end of products

  
  
  
  class ProductTable extends React.Component {
    render() {
      var onProductTableUpdate = this.props.onProductTableUpdate;
      var rowDel = this.props.onRowDel;
      var filterText = this.props.filterText;
      var product = this.props.products.map(function(product) {

        return (<ProductRow onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel.bind(this)} key={product.id}/>)
      });
      return (
        <div className='cock'>
  
  
        <button type="button" onClick={this.props.onRowAdd} className="addBtn">Add Excercise</button>
        <button type="button" onClick={this.props.onSave} className="addBtn" id='otherBtn'>Save Changes</button>
          <table className="containerP">
            <thead>
              <tr>
                <th className='entryP'>Excercise</th>
                <th className='entryP'>Sets</th>
                <th className='entryP'>Reps</th>
                <th className='entryP'>Weight</th>
              </tr>
            </thead>
  
            <tbody className='rat'>
              {product}
  
            </tbody>
  
          </table>
        </div>
      );
    }
  }
  
  class ProductRow extends React.Component {
    onDelEvent() {
      this.props.onDelEvent(this.props.product);
    }

    render() {
  
      return (
        <tr className="eachRow">
            <td>
          <EditableCell className='med' onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            "type": "exercise",
            value: this.props.product.exercise,
            id: this.props.product.id
          }}/>
          </td>
          <td className='med'>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "sets",
            value: this.props.product.sets,
            id: this.props.product.id
          }}/>
          </td>
          <td >
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "reps",
            value: this.props.product.reps,
            id: this.props.product.id
          }}/>
          </td>
          <td >
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "weight",
            value: this.props.product.weight,
            id: this.props.product.id
          }}/>
          </td>
          <td className="min">
            <input type="button" onClick={this.onDelEvent.bind(this)} value="Delete" className="del-btn"/>
          </td>
        </tr>
        
      );
  
    }
  
  }
  class EditableCell extends React.Component {
  
    render() {
      return (
          <input className='dataP del' type='text' name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onProductTableUpdate}/>
      );
    }
  }




export default Products