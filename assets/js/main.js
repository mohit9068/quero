function myFunction(){
$.ajax({
  url: 'http://acadprojects.com/py/explora/subject',
  type: 'GET',
  success: function(result){
    console.log(result);
    for(i in result.data){
      $("#sel1").append($('<option>'+result.data[i].name+'</option>'));
      }
    }
  });
  $.ajax({
    url: 'http://acadprojects.com/py/explora/question?page=0&type=recent',
    type: 'GET',
    success: function(result){
      console.log(result);
        $("#tab1default").find('.h3').append($('<h3>'+result.data[0].posted_by_name+'</h3>'));
        $("#tab1default").find('.h2').append($('<h2>'+result.data[0].question+'</h2>'));
        $("#tab1default").find('.desc').append($('<p>'+result.data[0].posted_by_email+'</p>'));
        $("#tab1default").find('.tag').append($('<h4>'+result.data[0].tags+'</h4>'));

      }
    });
    $.ajax({
      url: 'http://acadprojects.com/py/explora/question?page=0&type=trending',
      type: 'GET',
      success: function(result){
        console.log(result);
          $("#tab2default").find('.h3').append($('<h3>'+result.data[0].posted_by_name+'</h3>'));
          $("#tab2default").find('.h2').append($('<h2>'+result.data[0].question+'</h2>'));
          $("#tab2default").find('.desc').append($('<p>'+result.data[0].posted_by_email+'</p>'));
          $("#tab2default").find('.tag').append($('<h4>'+result.data[0].tags+'</h4>'));
          $("#tab2default").find('.faces').append($('src='+result.data[0].image_url+));

        }
      });
      $.ajax({
        url: 'http://acadprojects.com/py/explora/question?page=0&type=popular',
        type: 'GET',
        success: function(result){
          console.log(result);
            $("#tab3default").find('.h3').append($('<h3>'+result.data[0].posted_by_name+'</h3>'));
            $("#tab3default").find('.h2').append($('<h2>'+result.data[0].question+'</h2>'));
            $("#tab3default").find('.desc').append($('<p>'+result.data[0].posted_by_email+'</p>'));
            $("#tab3default").find('.tag').append($('<h4>'+result.data[0].tags+'</h4>'));

          }
        });

};


$('#submit_form').on('click',function(){
  var $Nametext = $('#Nametext').val();
  var $Emailtext = $('#Emailtext').val();
  var $sel1 = $('#sel1').val();
  var $sel2 = $('#sel2').val();
  var $tagstext = $('#tagstext').val();
  var $messagetext = $('#messagetext').val();
  var $image = $('#image').val();
 var formd = new FormData();
  formd.append('posted_by_name',$Nametext);
  formd.append('posted_by_email',$Emailtext);
  formd.append('semester',$sel2);
  formd.append('tags',$tagstext);
  formd.append('question',$messagetext);
  formd.append('subject_id',$sel1);

  $.ajax({
    url: 'http://acadprojects.com/py/explora/question',
    type: 'POST',
    data: formd,
    success: function(result){
      console.log(result);
      alert("messgae successfully posted");
      $('myModal').modal('toggle');
      location.reload();
    }
  });
 });
 $('.modal').on('hidden.bs.modal', function(){
    $(this).find('form')[0].reset();
});
