import {Request,Response} from 'express';
import CreateProductService from '../services/CreatProductService';
import DeleteProductService from '../services/DeleteProductService';
import ListProductService from '../services/ListProductService';
import ShowProductService from '../services/ShowProductService';
import UpdateProductService from '../services/UpdateProductService';

export default class StudentController{
  public async index(request:Request, response: Response){
    const listProductService = new ListProductService(); 

    const products = await listProductService.execute()


    return response.json(products)
  }
  public async show(request:Request, response: Response){

    const {id} = request.params;

    const showProductService = new ShowProductService();

    const product = await showProductService.execute(id);

    return response.json(product)

  }
  public async update(request:Request, response: Response){
    const updateProductService = new UpdateProductService();

    const product = await updateProductService.execute();

    return response.json(product)
  }
  public async create(request:Request, response: Response){
    const createProductService = new CreateProductService();

    const product = await createProductService.execute();
    return response.json(product)

  }
  public async delete(request:Request, response: Response){
    const deleteProductService = new DeleteProductService();

    const product = await deleteProductService.execute();
    return response.json(product)

    
  }
}