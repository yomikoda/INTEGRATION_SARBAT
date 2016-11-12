

              
      
    

            var circle01 = new ProgressBar.Circle('#load01', {
                to: { color: '#ffcc00' },
                from: { color: '#ff6600' }, 
                 step: function(state, circle, attachment) {
                circle.path.setAttribute('stroke', state.color);
            },
                strokeWidth: 11,
                duration: 3000,
                trailColor: 'black',
                easing: 'easeInOut'
            });
            var circle02 = new ProgressBar.Circle('#load02', {
                to: { color: '#ffcc00' },
                from: { color: '#ff6600' }, 
                 step: function(state, circle, attachment) {
                circle.path.setAttribute('stroke', state.color);
            },
                strokeWidth: 11,
                duration: 3000,
                trailColor: 'black',
                easing: 'easeInOut'
            });
            var circle03 = new ProgressBar.Circle('#load03', {
                to: { color: '#ffcc00' },
                from: { color: '#ff6600' }, 
                 step: function(state, circle, attachment) {
                circle.path.setAttribute('stroke', state.color);
            },
                strokeWidth: 11,
                duration: 3000,
                trailColor: 'black',
                easing: 'easeInOut'
            });
            var circle04 = new ProgressBar.Circle('#load04', {
                to: { color: '#ffcc00' },
                from: { color: '#ff6600' }, 
                 step: function(state, circle, attachment) {
                circle.path.setAttribute('stroke', state.color);
            },
                strokeWidth: 11,
                duration: 3000,
                trailColor: 'black',
                easing: 'easeInOut'
            });

         
         
         
        circle01.animate(-0.7);
        circle02.animate(-0.9);
        circle03.animate(-0.6);
        circle04.animate(-0.4);

