require 'test_helper'

class WelcomeControllerTest < ActionController::TestCase
  test "should get page6" do
    get :page6
    assert_response :success
  end

end
