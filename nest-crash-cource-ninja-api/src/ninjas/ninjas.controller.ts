import { Controller , Get, Post, Put, Delete, Param, Query,Body, NotFoundException, ParseIntPipe, ValidationPipe, UseGuards} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';
import { BeltGuard } from 'src/belt/belt.guard';



/*
const service = new NinjasService();
const controller = new NinjasController(service);
*/

@Controller('ninjas')
//@UseGuards(BeltGuard)

export class NinjasController {
//GET/ninjas --> []
/*
@Get()
getNinjas(){
    return [];
}
*/
//GET/ninjas?type=fast --> []
/*
@Get()
getNinjas(@Query('type') type : string){
    return [{type}];
}
*/
//GET/ninjas/:id --> {...}

/*
//GET/ninjas?weapon=fast --> []
@Get()
getNinjas(@Query('weapon') weapon : 'stars' | 'nunchucks' ){
    const service = new NinjasService();
    return service.getNinjas(weapon);
}
*/


constructor(private readonly ninjasService : NinjasService) {}


@Get()
@UseGuards(BeltGuard)
getNinjas(@Query('weapon') weapon : 'stars' | 'nunchucks' ){
    const service = new NinjasService();
    return this.ninjasService.getNinjas(weapon);
}

/*
@Get(':id')
getOneNinja(@Param('id') id:string){
    return this.ninjasService.getNinja(+id);
}

//POST/ninjas
@Post()
createNinja(@Body() createNinjaDto : CreateNinjaDto){
    return {
        name : createNinjaDto.name,
    };
}
//PUT/ninjas/:id --> {....}
@Put(':id')
updateNinja(@Param('id') id:string, @Body() UpdateNinjaDto : UpdateNinjaDto){
    return {
        id,
        name : UpdateNinjaDto
    };
}
//DELETE/ninjas/:id
@Delete()
removeNinja(@Param('id') id:string){
    return {
        id,
    };
}
*/



@Get(':id')
getOneNinja(@Param('id', ParseIntPipe) id:number){
    try{
        return this.ninjasService.getNinja(+id);
    }
    catch(err){
        throw new NotFoundException();
    }
    
}

//POST/ninjas
@Post()
createNinja(@Body(new ValidationPipe()) createNinjaDto : CreateNinjaDto){
    return this.ninjasService.createNinja(createNinjaDto);
}
//PUT/ninjas/:id --> {....}
@Put(':id')
updateNinja(@Param('id') id:string, @Body() UpdateNinjaDto : UpdateNinjaDto){
    return this.ninjasService.updateNinja(+id,UpdateNinjaDto);
}
//DELETE/ninjas/:id
@Delete()
removeNinja(@Param('id') id:string){
    return this.ninjasService.removeNinja(+id);
}


}

//GET/ninjas --> []
//GET/ninjas/:id --> {...}
//POST/ninjas
//PUT/ninjas/:id --> {....}
//DELETE/ninjas/:id