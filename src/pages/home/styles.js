import { Button, StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: '#353535',
    padding: 15,
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#FFF'
  },
  texts: {
    fontSize: 20,
    color: '#FFF'
  },
  cardsContainer: {
    flex: 1,
    justifyContent: 'space-around',
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#b5e550',  // Cor de fundo do botão
    paddingVertical: 10,         // Espaçamento vertical
    paddingHorizontal: 20,       // Espaçamento horizontal
    borderRadius: 5,             // Bordas arredondadas
    alignItems: 'center',        // Centraliza o texto horizontalmente
    justifyContent: 'center',    // Centraliza o texto verticalmente
    marginVertical: 10,          // Margem vertical para separar do conteúdo
  },
  buttonText: {
    color: '#fff',               // Cor do texto
    fontSize: 16,                // Tamanho da fonte
    fontWeight: 'bold',          // Peso da fonte
  },


  resultsContainer: {
    backgroundColor: '#474747ff',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 15,
    alignSelf: 'center',
    width: '55%',
    maxHeight: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  resultsText: {
    fontSize: 18,         // 🔸 fonte um pouco maior
    color: '#fff',        // 🔸 cor branca
    textAlign: 'center',  // 🔸 centralizado no meio
    marginVertical: 4,    // 🔸 espaçamento entre as linhas
    alignSelf: 'center',  // 🔸 garante que o texto não grude à esquerda
  },


  

});

export default styles;