//Creating a game on the object!
const tic_tac_toe = {
    board: ['','','','','','','','',''],
    simbols: {
        options: ['X','O'],
        turn_index: 0,
        change: function(){
            this.turn_index = (this.turn_index === 0 ? 1 : 0);
        }
    
    },
    container_element: null,
    gameover: false,
    winning_sequences: [
 
        //Horizontal
        [0,1,2],
        [3,4,5],
        [6,7,8],

        //Vertical
        [0,3,6],
        [1,4,7],
        [2,5,8],

        //Diagonal
        [0,4,8],
        [2,4,6]

    ],

    init: function(container){
        this.container_element = container;
    },

    make_play: function(position){
        if(this.gameover) return false;
        if(this.board[position] === ''){
            //turn
            this.board[position] = this.simbols.options [ this.simbols.turn_index ];
            
            // draw
            this.draw();

            let winning_sequences_index = this.check_winning_sequences ( this.simbols.options [ this.simbols.turn_index ]);
            if(winning_sequences_index >= 0){
                this.game_is_over();
            } else {
                // 'X' and 'O'
                this.simbols.change();
            }
            return true;
        } else{
            return false;
        }
    },

    game_is_over: function(){
        // alert("Game-Over");
        this.gameover = true;
        alert("Game-Over");
        console.log("Game Over");
    },

    start: function(){
        this.board.fill('');
        this.draw();
        this.gameover = false;
    },

    check_winning_sequences: function(simbol){
        for (i in this.winning_sequences){
            if(this.board [this.winning_sequences[i][0] ] == simbol &&
               this.board [this.winning_sequences[i][1] ] == simbol &&
               this.board [this.winning_sequences[i][2] ] == simbol){  
                   console.log("Sequencia Vencedora !" + i);
                   return i;
            }
        };
        return -1;
    },


    draw: function(){
        let content = '';

        for ( i in this.board) {
            content += '<div onclick="tic_tac_toe.make_play(' + i + ')">'+ this.board[i] +'</div>';
        }

        this.container_element.innerHTML = content;
    }


};
