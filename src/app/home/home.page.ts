import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public places = [];
  public search = '';
  public tempPlaces = [];
  constructor() {
  // CONSULTA REMOTA
  this.places.push({
    image: 'https://www.eluniversal.com.mx/sites/default/files/playa_amor_nayarit_0.jpg',
    title: 'Islas Marietas',
    subtitle: 'Isla del amor',
    description: 'Las Islas Marietas se encuentran a 27 km de Nuevo Vallarta, a 35 km de Puerto Vallarta y a solo 8km de Punta Mita; es hogar de aves marinas migratorias y continentales, aquí se encuentra la población más grande a nivel mundial de pájaros bobos de patas amarillas, cafés y azules. Su parque Marino protege en total a 44 especies de flora y fauna, varias de ellas en peligro de extinción, por lo que es considerada también como Reserva de la Biosfera por la UNESCO.',
    active : true
  });
  this.places.push({
    image: 'https://www.elsoldenayarit.mx/site/images/notas/35315__20150531202236_117nayarit1.jpg',
    title: 'Museo Interactivo de Ciencias e Innovación de Nayarit',
    subtitle: 'Tepic, Nayarit',
    description: 'Espacio para enseñar el devenir de la humanidad y el impacto de la ciencia, la tecnología, el arte y la innovación. Da a conocer los aportes de nuevas formas de aprendizaje para el sistema educativo estatal en materia de ciencia y tecnología. Está compuesto por cinco salas de exhibiciones interactivas, módulos electrónicos equipados con alta tecnología, audios y videos digitales y contenidos de nueva generación. Los usuarios tienen una participación activa, libre y lúdica, mediante la interacción con las exhibiciones, la tecnología y el personal especializado.',
    active : false
  });
  this.places.push({
    image: 'https://i.pinimg.com/originals/9d/1c/cb/9d1ccbcd92a7ea3e4b46b66e4211cb48.jpg',
    title: 'Catedral de Tepic',
    subtitle: 'Catedral de la Asunción de María de Tepic',
    description: 'La Catedral de Tepic, es el templo católico sede de la diócesis de Tepic. Está ubicada frente a la plaza principal, en el centro de la ciudad. Es famosa por su portada de estilo neogótico. El primer edificio se levantó hacia 1750. Diferente al que conocemos hoy en día, ya que era de menores proporciones. A comienzos del siglo XIX, se decide levantar otro más grande y de mayores dimensiones. Las obras concluyeron en el año de 1885. El templo fue designado como catedral por el Papa León XIII, el 23 de junio de 1891, siendo su primer obispo Ignacio Díaz y Macedo. La fachada actual fue realizada por Gabriel Luna y Rodríguez, quien había retomado los trabajos anteriores pero en estilo neogótico, diferente al gusto neoclásico que imperaba en la época. Terminó la última torre en el año de 1896. ',
    active : true
  });
  this.places.push({
    image: 'https://mexicolindoyquerido.com.mx/mexico2/images/IMAGENES_PARA_TEMPLATE/lugares_de_interes_en_mexico/P17_Casa_Museo_Juan_Escutia_Nayarit.png',
    title: 'Casa Museo Juan Escutia',
    subtitle: 'Museo',
    description: 'La Casa Museo Juan Escutia es un museo mexicano dedicado a Juan Escutia y se ubica en el centro de Tepic en el estado de Nayarit, Juan Escutía fue uno de los combatientes que murió en la defensa del Castillo de Chapultepec durante la Intervención estadounidense en México. El museo está construido en la casa donde nació Juan Escutia el 23 de junio de 1822, y está enfocado en la época de la Intervención estadounidense en México.​',
    active : true
  });
  this.places.push({
    image: 'https://www.blunia.net/384/1_384_0da.jpg',
    title: 'Muelle de San Blas',
    subtitle: 'Muelle de Matanchén',
    description: 'En su extremo marítimo, se encuentra la estatua de “La Loca de San Blas”, un tributo a Rebeca Méndez Jiménez cuya historia se hizo famosa por la canción del grupo Maná “En el Muelle de San Blas”, la cual menciona al muelle en la cabecera municipal y no éste nuevo. Aunque su nombre no se relaciona con el significado real de la palabra, pues aquí no atracan embarcaciones, es verdaderamente un atractivo turístico que no puede faltar en tu visita a costas nayaritas.',
    active : true
  });
  this.places.push({
    image: 'https://d3fky3asuafjls.cloudfront.net/U5l_iyyTjUJZIPtaTVCChqxFfWo=/fit-in/720x440/filters:fill(000)/02/92/44/02924435.jpg',
    title: 'Isla de Mexcaltitán',
    subtitle: 'Nayarit',
    description: 'No ha vivido nada igual, visitar la Isla de Mexcaltitán, ubicada al noroeste de Santiago Ixcuintla es, literalmente, un lugar mágico. Decretada en 1986 como Zona de Monumentos Históricos, Mexcaltitán se distingue además por lo pintoresco de sus casas de teja y la tranquilidad de sus pequeñas calles.',
    active : true
  });

  this.tempPlaces = this.places;
    // var a = 0; //Como si fuera publica
    // let a = 0; // Solo en su ambito
  }
  filter(): void {
    console.log('Buscando... ' + this.search);
    this.places = [];
    this.places = this.tempPlaces;
    this.places = this.places.filter((place) => {
      return (place.title.toLocaleLowerCase().indexOf(this.search.toLocaleLowerCase()) > -1); });
  }
  deletePlace(pos: number): void{
    for (let i = 0; i < this.tempPlaces.length; i++){
     if (this.places[pos].title === this.tempPlaces[i].title){
      this.tempPlaces.splice(i , 1);
     }
    }
  }
  changeStatus(pos: number): void{
    this.places[pos].active = !this.places[pos].active;
    for (let i = 0; i < this.tempPlaces.length; i++){
      if (this.places[pos].title === this.tempPlaces[i].title){
        this.tempPlaces[pos].active = this.places[pos].active;
      }
    }
  }
}
