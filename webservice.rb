require 'rubygems'
require 'sinatra'
require 'json'

post '/login' do
	data = JSON.parse requet.body.read

	if data['user_name'] && data['password']
		200
	else
		412
	end
end
 