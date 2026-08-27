agar vite mein API call karna hai to 'Axoios' naam ka pakege install karo
link of axoios --> https://www.npmjs.com/package/axios
command 1. npm i axios
then write asynk function
             const getProductsData = async () => {
    try {
      let res = axios.get(''); // kisi dur filese data lane ke liye
    } catch (error) {
      console.log("Error in api", error);
    }
  };
  -------------------------------------------------
  aur get ke andar api's fake Store se aayengi
-----------------------------------------------------------------------------------------------------------------------------------------------

