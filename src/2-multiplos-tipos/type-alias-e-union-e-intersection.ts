// type alias
type User = {
  name: string;
  lastName: string;
  birthday: string;
  age?: number;
}

const kevin: User = {
  name: 'Kevin',
  lastName: 'Ribeiro',
  birthday: '23/05/1998',
  age: 24,
}

console.log(kevin);

// union types
// utilizado com pipe "|", para dizer que a nossa tipagem é um ou, o outro tipo 
// (como se fosse o OR "||")
type LogLevel = 'info' | 'error' | 'debug';
function logMessage(message: string, level: LogLevel) {
  console.log(`${level} - ${message}`);
}

logMessage('Uma mensagem info', 'info');
logMessage('Uma mensagem error', 'error');
logMessage('Uma mensagem debug', 'debug');
// logMessage('Uma mensagem error', 'erro'); // mostra um erro sobre o tipo tipo informado


// intersection types
// utilizado com "&" para agrupar tipos
type About = {
  bio: string;
  interests: string[];
}

type Profile = User & About;

const userWithProfile: Profile = {
  name: 'Kevin',
  lastName: 'Ribeiro',
  birthday: '23/05/1998',
  bio: 'Olá, meu nome é Kevin',
  interests: ['Filmes e Séries', 'Música', 'Lugares'],
}

console.log(userWithProfile);

type ProfileWithLogLevel = User & {
  logLevel: LogLevel;
}

const userWithLogs: ProfileWithLogLevel = {
  name: 'Kevin',
  lastName: 'Ribeiro',
  birthday: '23/05/1998',
  logLevel: 'debug',
}

console.log(userWithLogs);