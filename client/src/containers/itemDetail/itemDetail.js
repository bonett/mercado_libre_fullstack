import { connect } from "react-redux";
import * as homeStore from "../../store/home";
import ItemDetailComponent from "../../components/itemDetail";

function mapStateToProps(state) {
  const homeSelectors = homeStore.selectors(state);
  const { categories } = homeSelectors.getItemList();
  const {
    /*  data: { item }, */
    status,
  } = homeSelectors.getItemDetail();

  return {
    itemSelected: {
      id: "MLA1100775927",
      title:
        "Apple Macbook Air (13 Pulgadas, 2020, Chip M1, 256 Gb De Ssd, 8 Gb De Ram) - Plata",
      price: { currency: "ARS", amount: 170500, decimals: null },
      picture: "http://http2.mlstatic.com/D_648428-MLA46516517286_062021-I.jpg",
      condition: "Nuevo",
      free_shipping: true,
      sold_quantity: 0,
      description:
        "La notebook más delgada y ligera de Apple viene con los superpoderes del chip M1. Termina todos tus proyectos mucho más rápido con el CPU de 8 núcleos y disfruta como nunca antes de apps y juegos con gráficos avanzados gracias al GPU de hasta 8 núcleos. Además, el Neural Engine de 16 núcleos se encarga de acelerar todos los procesos de aprendizaje automático. Todo en un diseño silencioso sin ventilador que te ofrece la mayor duración de batería en una MacBook Air: hasta 18 horas. (1) Portátil como siempre, más poderosa que nunca.\n\n\nAvisos Legales\nNo todos los recursos y configuraciones están disponibles en todos los países.\n(1) La duración de la batería varía según el uso y la configuración.\n(2) Comparado con la generación anterior.\n(3) El tamaño de la pantalla se mide en diagonal.",
    },
    status,
    categories,
  };
}

export default connect(mapStateToProps, {})(ItemDetailComponent);
