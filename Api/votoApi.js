import Factory from "../DAOs/Factory.js";
import { MODE } from "../config/config.js";

class votoApi {
  constructor() {
    this.factory = Factory.factory(MODE);
    this.candidatosPermitidos = ["candidatoA", "candidatoB", "candidatoC","enblanco"];
    this.distritosPermitidos = ["zona1","zona2","zona3","zona4"]
  }
  cargarVoto = async (voto) => {
    try {
      const {candidato, distrito} = voto;

      const infoVoto = await this.factory.votoDao.cargarVoto(voto);

      return infoVoto;
    } catch (error) {
      return error;
    }
  };

  getVotosGenerales = async () => {
    try {
      const infoVoto = await this.factory.votoDao.getVotosGenerales();
      return infoVoto;
    } catch (error) {
      console.log(error.message)
      return error;
    }
  };

  contarVotosGenerales = (votos) => {
    const votosPorCandidato = {
      candidatoA: 0,
      candidatoB: 0,
      candidatoC: 0,
      enblanco: 0
    };

    votos.forEach((voto) => {
      if (this.candidatosPermitidos.includes(voto.candidato)) {
        votosPorCandidato[voto.candidato]++;
      }
    });

    return votosPorCandidato;
  };


  formatoVotosGenerales = (votosGenerales) => {
    return { generales: votosGenerales };
  };
  

}

export default votoApi;
