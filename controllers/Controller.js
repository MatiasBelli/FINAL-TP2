import votoApi from "../Api/votoApi.js";

class Controller {
  constructor() {
    this.vApi = new votoApi();

  }

  cargarVoto = async (req, res) => {
    try {
      const infoVoto = await this.vApi.cargarVoto(req.body);
      res.status(200).send("Voto cargado");
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  getVotosGenerales = async (req, res) => {
    try {
      const listaVotos = await this.vApi.getVotosGenerales();
      const votosGenerales =await this.vApi.contarVotosGenerales(listaVotos);
      const formatoVotosGenerales =await this.vApi.formatoVotosGenerales(votosGenerales);
      res.status(200).send(formatoVotosGenerales);
    } catch (error) {
      console.log({ message: error.message })
      res.status(422).send({ message: error.message });
    }
  };

}

export default Controller;
