import random
 
with open('words.txt', 'r') as f:
    words = f.read().splitlines()
 
#user chooses difficulty of word
difficulty = input("Easy (3-5), Medium (6-8), or Hard (9-14)?: ")
 
#easy 3-5
if difficulty == "Easy":
    random.word = random.choice([word for word in words if len(word) <= 5])

#medium 6-8
if difficulty == "Medium":
    random.word = random.choice([word for word in words if 6 <= len(word) and len(word) <=8])
 
#hard 9-14
if difficulty == "Hard":
    random.word = random.choice([word for word in words if 9<= len(word) and len(word) <=14])
 
# num of chars in word
print("Your word is " + str(len(random.word)) + " letters long")
 
# num of blanks
blanks = "_ " * len(random.word)
print(blanks)
 
# tries, guess, and mistakes
tries = len(random.word) + 4
mistakes = 0
guess_num = 0 #used for user input
 
#display rules
#guess system
#guess = input
#if guess is not in random.word add 1 to mistakes
#when mistakes == 5 print "you lose" then quit the program
#if guess is in random.word print "_ " * len(random.word) again but with letter filled in
#when guess == tries: print "you lose" then quit program
 
print("You have " + str(tries) + " tries and up to 5 mistakes")
 
while guess_num <= tries:
    guess = input("Guess #" + str(guess_num + 1) + ": ")
    guess_num += 1
   
    if guess in random.word:
        print("You have found a letter!")
        print("The letter you have found is the #" + str(random.word.index(guess) + 1) + " letter in the word!")
       
        print("------------------------------")
    else:
        print("That letter is not in the word!")
        print("------------------------------")
        mistakes += 1
        print("Mistakes made: " + str(mistakes) + "/5")
        if mistakes == 5:
            print("You lose!")
            quit()