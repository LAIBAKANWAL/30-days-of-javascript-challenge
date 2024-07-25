// Promises and Async/Await

// Activity 1  #Understanding Promises
// Task1
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Successed!");
  }, 2000);
});

promise
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });

// Task2
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Failed!");
  }, 2000);
});

promise2
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });

// Activity 2  #Chaining Promises
// Task3
const getData = (id, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Fetched data for request ${id}`);
      resolve(`Data from request ${id}`);
    }, delay);
  });
};

getData(1, 1000)
  .then((data1) => {
    console.log(data1);
    return getData(2, 3000);
  })
  .then((data2) => {
    console.log(data2);
    return getData(3, 1500);
  })
  .then((data3) => {
    console.log(data3);
    return getData(4, 1000);
  })
  .then((data4) => {
    console.log(data4);
    console.log("All data Fetched successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

// Activity 3  #Using Async/Await
// Task4
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("get Reponse");
  }, 3000);
});

const fetchData = async () => {
  try {
    const result = await promise3;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

fetchData();

// Task5
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("no Reponse found");
  }, 1000);
});

const fetchData2 = async () => {
  try {
    const result = await promise4;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

fetchData2();

// Activity 4  #Fetching Data From an API
// Task6
const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });

// Task7
const fetchDataa = async () => {
  try {
    const result = await fetch(apiUrl);
    if (!result.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await result.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

fetchDataa();

// Activity 5  #Concurrent Promises
// Task8
const promise01 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Reponse 1");
  }, 1000);
});

const promise02 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Reponse 2");
  }, 3000);
});

const promise03 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Reponse 3");
  }, 1000);
});

Promise.all([promise01, promise02, promise03])
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });

// Task9
const promise5 = new Promise((resolve, reject) =>
  setTimeout(() => reject("Error 1"), 1000)
);
const promise6 = new Promise((resolve, reject) =>
  setTimeout(() => resolve("Success 2"), 2000)
);
const promise7 = new Promise((resolve, reject) =>
  setTimeout(() => resolve("Success 3"), 3000)
);

Promise.race([promise5, promise6, promise7])
  .then((value) => {
    console.log(value); 
  })
  .catch((error) => {
    console.error(error);
  });
