function makeArrayConsecutive2(statues) {
  statues.sort(function (a, b) {
    return a - b;
  });
  let newStatues = [];
  for (let i = statues[0]; i <= statues[statues.length - 1]; i++) {
    newStatues.push(i);
  }
  return newStatues.length - statues.length;
}
