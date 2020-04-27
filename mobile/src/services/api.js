import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.15.90:3333' //O IP deve ser o mesmo da máquina, não é possivel usar o local host
                                        // para enxergar o IP, usar o IPCONFIG
});

export default api;