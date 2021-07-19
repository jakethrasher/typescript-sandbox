enum Role {PET, FRIEND, GUARDIAN};
const dog = {
  name: 'Pearl',
  isGood: true,
  likes: ['sleeping', 'riding in the car', 'going on walks'],
  role: Role.PET
}

if(dog.role === Role.PET){
  console.log('is pet')
}