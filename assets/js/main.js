function myFunction(){
$.ajax({
  url: 'http://acadprojects.com/py/explora/subject',
  type: 'GET',
  success: function(result){
    console.log(result);
    for(i in result.data){
       $("#sel1").append($('<option value="'+result.data[i].id+'">'+result.data[i].name+'</option>'));
      }
    }
  });
  $.ajax({
    url: 'http://acadprojects.com/py/explora/question?page=0&type=recent',
    type: 'GET',
    success: function(result){
      console.log(result);
      for(i in result.data){
        $("#tab1default").append($('<div><div class="col-md-2 col-xs-4"><section class="tab1-left"><img class="imagestyle" src='+result.data[i].image_url+'/><div class="h3"><h3>'+result.data[i].posted_by_name+'</h3></div><h5>02 Feb,2017</h5></section></div><div class="col-md-10 col-xs-8"><section class="tab1-right"><div class="h2"><h2>'+result.data[i].question+'</h2></div><div class="desc"><p>'+result.data[i].posted_by_email+'</p></div><div class="tag">Tags:<h4>'+result.data[i].tags+'</h4></div><a href="index3.html"><button type="button" class="btn btn-outline-success ">View Answers</button></a></section></div></div>&nbsp<hr>'));
      }
      }
    });
    $.ajax({
      url: 'http://acadprojects.com/py/explora/question?page=0&type=trending',
      type: 'GET',
      success: function(result){
        console.log(result);
        for(i in result.data){
          $("#tab2default").append($('<div><div class="col-md-2 col-xs-4"><section class="tab1-left"><img class="imagestyle" src='+result.data[i].image_url+'/><div class="h3"><h3>'+result.data[i].posted_by_name+'</h3></div><h5>02 Feb,2017</h5></section></div><div class="col-md-10 col-xs-8"><section class="tab1-right"><div class="h2"><h2>'+result.data[i].question+'</h2></div><div class="desc"><p>'+result.data[i].posted_by_email+'</p></div><div class="tag" id="h4">Tags:<h4>'+result.data[i].tags+'</h4></div><a href="index3.html"><button type="button" class="btn btn-outline-success ">View Answers</button></a></section></div></div>&nbsp<hr>'));
        }
        }
      });
      $.ajax({
        url: 'http://acadprojects.com/py/explora/question?page=0&type=popular',
        type: 'GET',
        success: function(result){
          console.log(result);
          for(i in result.data){
            $("#tab3default").append($('<div><div class="col-md-2 col-xs-4"><section class="tab1-left"><img class="imagestyle" src='+result.data[i].image_url+'/><div class="h3"><h3>'+result.data[i].posted_by_name+'</h3></div><h5>02 Feb,2017</h5></section></div><div class="col-md-10 col-xs-8"><section class="tab1-right"><div class="h2"><h2>'+result.data[i].question+'</h2></div><div class="desc"><p>'+result.data[i].posted_by_email+'</p></div><div class="tag">Tags:<h4>'+result.data[i].tags+'</h4></div><a href="index3.html"><button type="button" class="btn btn-outline-success ">View Answers</button></a></section></div></div>&nbsp<hr>'));
          }
          }
        });


};
function Answerpagefunction(){
  $.ajax({
    url: 'http://acadprojects.com/py/explora/question?page=0&type=recent',
    type: 'GET',
    success: function(result){
      console.log(result);
        $("#tab1default").append($('<div><div class="col-md-2 col-xs-4"><section class="tab1-left"><img class="imagestyle" src='+result.data[0].image_url+'/><div class="h3"><h3>'+result.data[0].posted_by_name+'</h3></div><h5>02 Feb,2017</h5></section></div><div class="col-md-10 col-xs-8"><section class="tab1-right"><div class="h2"><h2>'+result.data[0].question+'</h2></div><div class="desc"><p>'+result.data[0].posted_by_email+'</p></div><div class="tag">Tags:<h4>'+result.data[0].tags+'</h4></div><button type="button" class="btn btn-outline-success" data-toggle="modal" data-target="#myModal">Post Answer</button></section></div></div>&nbsp<hr>'));
      }
    });
    $.ajax({
      url: 'http://acadprojects.com/py/explora/answer?question_id=2&page=0',
      type: 'GET',
      success: function(result){
        console.log(result);
        for(i in result.data){
          $("#answerbox").append($('<div class="row"><div class="col-md-12 col-sm-12" style="padding: 0px;text-align: center;"><div class="talk-bubble round tri-right left-top "><div class="talktext"><p>'+result.data[i].answer+'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</br><small>'+result.data[i].answer_by_email+'</small></p><div class="col-md-6 col-xs-4"> <section class="like"><button id="like"><i class="fa fa-thumbs-o-up hvr-shrink" style="font-size:35px;"aria-hidden="true"></i>&nbsp<small id="counter">'+result.data[i].like_count+'</small></button></section></div><div class="col-md-6 col-xs-8 answername"><h6>Posted by:'+result.data[i].answer_by_name+'</h6><br></br><div class="date"style="text-align:right;">Date:02feb,2017</div></div></div></div></div></div>'));
        }

        }

      });
};


$.ajax({
  url: 'http://acadprojects.com/py/explora/answer',
  type: 'PUT',
  data: JSON.stringify('answer_id'),
  success: function(result) {
    $("#like").click(function(){
      num = parseInt($("#counter").text());
      $("#counter").text(num+1);
    })
  }
});

function postfunction(){
console.log('post function called');
  var $Nametext = $('#Nametext');
  var $Emailtext = $('#Emailtext');
  var $sel1 = $('#sel1');
  var $sel2 = $('#sel2');
  var $tagstext = $('#tagstext');
  var $messagetext = $('#messagetext');
console.log($Nametext.val(),$tagstext.val());
 var FormData = {
	  posted_by_name : $Nametext.val(),
	  posted_by_email: $Emailtext.val(),
	  semester : $sel2.val(),
	  tags: [$tagstext.val()],
	  question : $messagetext.val(),
	  subject_id : $sel1.val(),
	};
console.log('form data');
console.log(JSON.stringify(FormData));
$.ajax({
  url: 'http://acadprojects.com/py/explora/question',
  type: 'POST',
  data: JSON.stringify(FormData),
  contentType: 'application/json; charset=utf-8',
  dataType: 'json',
  async: false,
  success: function(msg) {
      alert('Your Question has posted successfully!');
      location.reload();
  },
  error: function(msg){
    alert('Please Fill all the fields');
  }
});

return false;

};

function postanswer(){
console.log('post function called');
  var $Name = $('#Name');
  var $Email = $('#Email');
  var $answertext = $('#messagetext');
console.log($Name.val());
 var FormData = {
	  answer_by_name : $Name.val(),
	  answer_by_email: $Email.val(),
	  answer : $answertext.val(),
	};
console.log('form data');
console.log(JSON.stringify(FormData));
$.ajax({
  url: 'http://acadprojects.com/py/explora/answer',
  type: 'POST',
  data: JSON.stringify(FormData),
  contentType: 'application/json; charset=utf-8',
  dataType: 'json',
  async: false,
  success: function(msg) {
      alert('Your Answer has posted successfully!');
      location.reload();
  },
  error: function(msg){
    alert('Please Fill all the fields');
  }
});

return false;

};
