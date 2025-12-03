function indexOfIgnoreCase(s1, s2) {
   if (s2.length === 0) return 0;

  const a = s1.toLowerCase();
  const b = s2.toLowerCase();

  return a.indexOf(b);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
