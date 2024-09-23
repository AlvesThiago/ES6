const alunos = [
    { nome: 'João', nota: 5 },
    { nome: 'Maria', nota: 7 },
    { nome: 'Pedro', nota: 9 },
    { nome: 'Ana', nota: 4 },
    { nome: 'Lucas', nota: 6 }
  ];
  
  const filtrarAprovados = (alunos) => alunos.filter(aluno => aluno.nota >= 6);
  
  const aprovados = filtrarAprovados(alunos);
  console.log(aprovados);
  