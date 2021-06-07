
import { VoteComponent } from './vote.component'; 

//Arrange
let component : VoteComponent;

beforeEach(()=>{
  component = new VoteComponent()
})

describe('VoteComponent', () => {
  it('upVote', () => {
     component.upVote()
     //Assert
     expect(component.totalVotes).toBe(1)
  });

  it('downVote', () => {
    //Act
     component.downVote() 
     expect(component.totalVotes).toBe(-1)
  });
});