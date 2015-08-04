import {inject} from 'aurelia-framework';
import {PetStore} from './petStore';
import {SwaggerAureliaHttpClientGenerator} from 'paulvanbladel/aurelia-swagger-client';

@inject(PetStore, SwaggerAureliaHttpClientGenerator)
export class SwaggerTest{
    pet = {};
    constructor(petStore, generator){
      this.petStoreSchema = petStore.PetStoreSchema;
      this.api = generator.create(this.petStoreSchema);
      console.log(this.api);
      this.api.auth('secret-key');
      this.api.pet.addPet({id: 1, name: 'Paul Van Bladel'}).then((response)=>{
        console.log(response);
        return this.api.pet.getPetById(1);
      }).then((data)=>{
        return this.pet = data;
      });

    }
}
