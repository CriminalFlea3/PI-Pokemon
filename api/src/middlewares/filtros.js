const alphabetically = (array, num = 1) => {
    ordenados = []
    const names = num ? array.map( b => b.name).sort() : array.map( b => b.name).sort().reverse();
    names.forEach(name => {
      array.forEach( bas => {
        if( name === bas.name ) ordenados.push(bas);
      })
    })
    return ordenados;
}

const byType = (array, type) => {
  const types = array.filter( p => p.type[0].type.name === 'grass')
  console.log(types)
  return types;
  
}

module.exports = {
  alphabetically,
  byType
}