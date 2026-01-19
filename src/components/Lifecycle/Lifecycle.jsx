import { Component } from "react";

export default class Lifecycle extends Component {
  constructor(props) {
    super (props);
    console.log("1.Constructor: ");
    this.state = {
      count: 0,
    };
  } 

  componentDidMount() {
    console.log("componentDidMount: Komponen sudah di render ke DOM");
    //Perubahan pada DOM: Mengubah teks buton, warna dan background
    //button setelah komponen dimount
    document.getElementById("btn").textContent = "Klik untuk tambah";
    document.getElementById("btn").style.backgroundColor = "#3674b5";
    document.getElementById("btn").style.color = "#fff";

    this.interval = setInterval(() => {
        console.log("Count sekarang", this.state.count);
    },1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "3.componentDidUpdate: Komponen diperbarui",
      prevState.count,
      "->",
      this.state.count
    );
  }

  componentWillUnmount() {
    console.log("4. componentWillUnmount: Komponen akan dihapus");
    clearInterval(this.interval)
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>React Lifecycle</h2>
        <p>Count: {this.state.count}</p>
        <button id="btn" onClick={this.increment}>
          Tambah
        </button>
      </div>
    );
  }
}
