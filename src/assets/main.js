$(function() {

  // your code will go here
  $.ajax(
    {
      method: 'get',
      url: 'https://www.codeschool.com/users/1250747.json',
      dataType: 'jsonp',
      success: function(response) {
          let completedCourses = response.courses.completed;
          let badges = $('#badges');
          $.each(completedCourses, function(index, course) {
            $('<div/>').addClass('course')
                       .append($('<h3/>').text(course.title))
                       .append($('<img/>').prop('src', course.badge))
                       .append($('<a/>').prop('href', course.url)
                                        .prop('target', '_blank')
                                        .text('See Course')
                                        .addClass('btn btn-primary'))
                       .appendTo(badges);
          });
      }
    });
});
