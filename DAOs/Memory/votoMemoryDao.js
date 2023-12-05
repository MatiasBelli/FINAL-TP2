class votoMemoryDao {
  constructor() {
    this.votosCargados = [];
  }
  cargarVoto = async (voto) => {
    try {
      this.votosCargados.push(voto);
      return voto;
    } catch (error) {
      return error;
    }
  };
  getVotosGenerales = async () => {
    try {
      return this.votosCargados;
    } catch (error) {
      return error;
    }
  };

}

export default votoMemoryDao;
