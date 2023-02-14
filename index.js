function teste(A,K){
  let maior = -1
  for(let a of A){
    for(let b of A){
      let S = a + b;
      if(S < K && S > maior){
          maior = S;
      }
    }
  }
  console.log(maior)
}

teste([10,20,30],15)