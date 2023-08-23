// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory function to create multiple objects using number and DNA array parameter
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum, 
    dna,
    mutate () {
      const dnaBases = ['A', 'T', 'C', 'G'];
      let mutateValue = dnaBases[Math.floor(Math.random() * 4)];
      let dnaIndex = Math.floor(Math.random() * 15);
      let dnaValue = dna[dnaIndex];
      while (mutateValue == dnaValue) {
        mutateValue = dnaBases[Math.floor(Math.random() * 4)]
      };
      this.dna[dnaIndex] = mutateValue; 
      return this.dna;
    },
    compareDNA (pAequor) {
      let specimenOne = this.dna;
      let specimenTwo = pAequor.dna; 
      let compareSum = 0; 
      for (let i = 0; i < specimenOne.length; i++) {
        if (specimenOne[i] == specimenTwo[i]) {
          compareSum++; 
        }
      }
      let percentMatch = (compareSum/15) * 100;
      percentMatch = percentMatch.toFixed(0);
      console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have a ${percentMatch}% DNA in common`);
    },
    willLikelySurvive () {
      let surviveSum = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          surviveSum++;
        }
      }
      let surviveChance = (surviveSum/15) * 100;
      surviveChance = surviveChance.toFixed(0); 
      console.log(surviveChance);
      if (surviveChance >= 60) {
        return true;
      } else {
        return false; 
      }
    },
    complimentStrand () {
      let complimentDNAStrand = [];
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'A') {
          complimentDNAStrand.push('T'); 
        } else if (this.dna[i] === 'T') {
          complimentDNAStrand.push('A'); 
        } else if (this.dna[i] === 'C') {
          complimentDNAStrand.push('G'); 
        } else if (this.dna[i] === 'G') {
          complimentDNAStrand.push('C'); 
        }
      }
      return complimentDNAStrand
    }
  }
};

const pAequor1 = pAequorFactory(1, mockUpStrand())
console.log(pAequor1.dna);
const pAequor2 = pAequorFactory(2, mockUpStrand())
console.log(pAequor2.dna);
pAequor1.compareDNA(pAequor2);
console.log(pAequor1.willLikelySurvive()); 

let pAequorResilient = [];

for (let i = 0; pAequorResilient.length < 30; i++) {
  let pAequor = pAequorFactory(i, mockUpStrand()); 
  if (pAequor.willLikelySurvive() == true) {
    pAequorResilient.push(pAequor);
  }
}

console.log(pAequorResilient);
console.log(pAequorResilient[3].dna);
console.log(pAequorResilient[3].complimentStrand());






