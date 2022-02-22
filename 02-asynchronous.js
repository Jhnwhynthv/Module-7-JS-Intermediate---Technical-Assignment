//soal 02
function janji (isR18Plus) {
  return new Promise(function (resolve, reject) {
    if (isR18Plus > 19) {
      resolve('anda sudah dewasa')
    } else {
      reject('anda masih dibawah umur')
    }
  })
}


/*const isR18Plus = ( ) => { } */
const printR18Plus = async () => {
    try {
    const underAge = await isR18Plus(10);
    const properAge = await isR18Plus(19);

    console.log(underage, '<<< underAge');
    console.log(properAge, '<<< PrpperAge');
  } catch (error) {
    console.log(error, '<<< error')
  }
}

printR18Plus();