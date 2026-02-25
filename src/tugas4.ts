function sapaan(parameter: string | number): string {
  if (typeof parameter === "string") {
    return `Halo, ${parameter}`;
  } else {
    return `Umur: ${parameter} tahun`;
  }
}

console.log(sapaan('Zulfi'));
console.log(sapaan(19));