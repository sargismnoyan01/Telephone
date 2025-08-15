import axios from "config/axios";
import toast from "react-hot-toast";
const { makeObservable, runInAction, observable } = require("mobx");

class ProductsStore {
  marks = [];
  products = [];

  isLoadingMarks = false;
  isLoadingProducts = false;

  constructor() {
    makeObservable(this, {
      marks: observable.ref,
      products: observable.ref,
    });
  }

  getMarks = () => {
    runInAction(() => {
      this.isLoadingMarks = true;
    });
    axios
      .get("/marks")
      .then(({ data }) => {
        console.log(data);
        runInAction(() => {
          this.marks = data;
          this.isLoadingMarks = false;
        });
      })
      .catch((error) => {
        runInAction(() => {
          toast.error("Failed to fetch Marks");
          this.isLoadingMarks = false;
        });
      });
  };

  getProducts = () => {
    runInAction(() => {
      this.isLoadingProducts = true;
    });
    axios
      .get("/products")
      .then(({ data }) => {
        runInAction(() => {
          this.products = data;
          this.isLoadingProducts = false;
        });
      })
      .catch((err) => {
        runInAction(() => {
          toast.error("Failed to fetch Products");
          this.isLoadingProducts = false;
        });
      });
  };
}

export default new ProductsStore();
