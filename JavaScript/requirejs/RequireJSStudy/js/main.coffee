require.config
  baseUrl : 'js/lib'
  paths:
    app:'../app/app'
    jquery:'jquery/dist/jquery.min'


#require ['app','jquery'],(app, $) ->
#  $("#main").text 'Cool, I am from RequestJs'

require ['app'] , ->
  null

