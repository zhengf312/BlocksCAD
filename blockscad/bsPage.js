/*
    Copyright (C) 2014-2015  H3XL, Inc

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

// This file holds the html for the main page
var blockscadpage = {};
blockscadpage.start = function() {
  var output = "";


output += '  <div id="main">';
output += '    <!-- start the html at the top: the navigation bar.  -->';
output += '    <nav class="navbar navbar-default" id="top-navigation-bar">';
output += '      <div class="container-fluid">';
output += '        <a href="#" class="pull-left"><img src="imgs/bslogo.png" style="max-height:50px"></a>';
output += '        <!-- <a class="navbar-brand" href="#">BlocksCAD</a> -->';
output += '        <!-- Collect the nav links, forms, and other content for toggling -->';
output += '        <ul class="nav navbar-nav">';
output += '          <li class="dropdown vc">';
output += '          <select id="languageMenu"></select>';
output += '          </li>';
output += '          <li class="dropdown"> ';
output += '            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">'+Blockscad.Msg.PROJECT_MENU+'<span class="caret"></span></a>';
output += '            <ul id="file-menu" class="dropdown-menu" role="menu">';
output += '              <li><a href="#" class="new-project">'+Blockscad.Msg.NEW+'</a></li>';
output += '              <li class="divider"></li>';
output += '              <li><a href="#" id="saveLocal">'+Blockscad.Msg.SAVE_BLOCKS_LOCAL+'</a></li>';
output += '              <li>';
output += '                <input type="file" accept=".xml" id="loadLocal" style="visibility: hidden; width: 1px; height: 1px" />';
output += '                <a href="#" onclick="document.getElementById(\'loadLocal\').click(); return false">'+Blockscad.Msg.LOAD_BLOCKS_LOCAL+'</a>';
output += '              </li>';
output += '              <li class="divider"></li>';
output += '              <li>';
output += '                <input type="file" accept=".xml" id="importLocal" style="visibility: hidden; width: 1px; height: 1px" />';
output += '                <a href="#" onclick="document.getElementById(\'importLocal\').click(); return false">'+Blockscad.Msg.IMPORT_BLOCKS_LOCAL+'</a>';
output += '              </li>';
output += '              <li>';
output += '                <input type="file" accept=".stl" id="importStl" style="visibility: hidden; width: 1px; height: 1px" />';
output += '                <a href="#" onclick="document.getElementById(\'importStl\').click(); return false">'+Blockscad.Msg.IMPORT_STL+'</a>';
output += '              </li>';
output += '              <li class="divider"></li>';
output += '              <li><a href="#" id="saveOpenscad">Save OpenSCAD code to your Computer</a></li>';
output += '            </ul>';
output += '          </li>';
output += '          <li class="dropdown">';
output += '            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Options<span class="caret"></span></a>';
output += '            <ul id="options-menu" class="dropdown-menu" role="menu">';
output += '              <li><a href="#" id="simpleToolbox">Simple Toolbox</a></li>';
output += '              <li><a href="#" id="advancedToolbox">Advanced Toolbox</a></li>';
output += '              <li>';
output += '                <a class="trigger right-caret">Block Color Scheme</a>';
output += '                <ul class="dropdown-menu sub-menu">';
output += '                  <li><a href="#" id="colors_one">Classic</a></li>';
output += '                  <li><a href="#" id="colors_two">Pale</a></li>';
output += '                </ul>';
output += '              </li>';
output += '            </ul>';
output += '          </li>';
output += '          <li class="dropdown">';
output += '            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Help<span class="caret"></span></a>';
output += '            <ul id="help-menu" class="dropdown-menu" role="menu">';
output += '              <li><a href="/docs/" target="_blank">Documentation</a></li>';
output += '<!--               <li class="divider"></li>';
output += '              <li><a href="#" id="colorPicker">Color Picker</a></li> -->';
output += '              <li class="divider"></li>';
output += '              <li><a href="#" data-toggle="modal" data-target="#about-modal">About</a></li>';
output += '            </ul>';
output += '          </li>';
output += '          <li class="dropdown">';
output += '            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Examples<span class="caret"></span></a>';
output += '            <ul id="examples-menu" class="dropdown-menu" role="menu">';
output += '              <li><a href="#" id="examples_cube_with_cutouts">Cube with cutouts</a></li>';
output += '              <li><a href="#" id="examples_anthias_fish">Anthias fish</a></li>';
output += '              <li><a href="#" id="examples_torus">Torus</a></li>';
output += '              <li><a href="#" id="examples_box">Parametric Box</a></li>';
output += '              <li><a href="#" id="examples_linear_extrude">Linear Extrude</a></li>';
output += '              <li><a href="#" id="examples_rotate_extrude">Rotate Extrude</a></li>';
output += '              <li><a href="#" id="examples_hulled_loop_sun">Sun with hulled Loop</a></li>';
output += '              <li><a href="#" id="examples_sine_function_with_loop">Sine Function with Loop</a></li>';
output += '              <li><a href="#" id="examples_trefoil_knot_param_eq">Trefoil Knot with Parametric Equations</a></li>';
output += '            </ul>';
output += '          </li>';
output += '        </ul>';
output += '        <div id="login-area" class="navbar-right">';
output += '        </div>';
output += '      </div>  <!-- /.container-fluid -->';
output += '    </nav>';
output += '';
output += '    <!-- after the navbar, I want a second row to contain the project name (if any), -->';
output += '    <!-- undo/redo/discard_all, and the "Blocks/Code" tabs.  Use a div for this. -->';
output += '    <div id="editView">';
output += '      <nav class="navbar navbar-default navbar-narrow"> <!-- second nav row -->';
output += '        <ul class="nav nav-pills navbar-right">';
output += '          <li class="active"><a href="#blocklyContainer" data-toggle="pill" id="displayBlocks">Blocks</a></li>';
output += '          <li><a href=\'#openScadPre\' data-toggle="pill" id="displayCode">Code</a></li>';
output += '        </ul> ';
output += '        <div class="input-group">';
output += '          <span class="input-group-addon" id="proj_name_label">Project Name</span>';
output += '          <input type="text" id="project-name" class="form-control proj-input" value="Untitled" maxlength="28" style="width: 300px;">';
output += '        </div>';
output += '        <div class="btn-over-blockly" style="margin-left: 20px">';
output += '<!--           <button id="redrawBlocksButton" class="btn btn-default notext" type="button"';
output += '            title="Redraw all blocks in workspace." style="margin-right:20px">';
output += '            <img src="imgs/refresh.svg" width="19px" height="19px">';
output += '          </button> -->';
output += '          <div class="btn-group navbar-btn" role="group" aria-label="...">';
output += '            <div style="display: inline-block" title="Undo" style="margin-right:-5px">';
output += '              <button type="button" class="btn btn-default" id="undoButton" style="margin-right: -5px">';
output += '                <img src="imgs/undo.svg" width="25px" height="19px">';
output += '              </button>';
output += '            </div>';
output += '            <div style="display: inline-block" title="Redo">';
output += '              <button type="button" class="btn btn-default" id="redoButton" style="margin-right: 20px">';
output += '                <img src="imgs/redo.svg" width="25px" height="19px">';
output += '              </button>';
output += '            </div>';
output += '          </div>';
output += '          <button id="trashButton" class="btn btn-default notext" title="Delete all blocks">';
output += '            <img src="blockly/media/1x1.gif" class="trash icon21">';
output += '          </button>';
output += '        </div> <!-- undo/redo/trash div --> ';
output += '      </nav> <!-- end second nav row -->';
output += '      <!-- End of the header content -->';
output += '';
output += '      <!-- beginning of page content (blockly + viewer) -->';
output += '      <div class="tab-content">';
output += '        <div class="tab-pane active" id="blocklyContainer">';
output += '          <div id="blocklyDiv">';
output += '';
output += '            <div class="resizableDiv">';
output += '              <div id="renderDiv">';
output += '                <input type="text" id="defColor"/>';
output += '                <select id="viewMenu" class="vmenu">';
output += '                  <option value="diagonal">diagonal</option>';
output += '                  <option value="front">front</option>';
output += '                  <option value="top">top</option>';
output += '                  <option value="right">right</option>';
output += '                  <option value="left">left</option>';
output += '                  <option value="back">back</option>';
output += '                  <option value="bottom">bottom</option>';
output += '                </select>';
output += '                <button type="button" id="viewReset" class="vreset">';
output += '                  Reset View';
output += '                </button>';
output += '<!--                 <button type="button" id="picButton" class="btn btn-default btn-pushed">';
output += '                  Pic';
output += '                </button>';
output += '                <button type="button" id="rPicButton" class="btn btn-default btn-pushed">';
output += '                  Rotating Pic';
output += '                </button> -->';
output += '                <button type="button" id="axesButton" class="btn btn-default btn-pushed">';
output += '                  <img src="imgs/axes.png">';
output += '                </button>';
output += '';
output += '';
output += '                <!-- <input type="text" id="colorButton"/> -->';
output += '';
output += '              </div> <!--renderDiv -->';
output += '';
output += '              <div id="paneContainer">';
output += '                <div id="renderPane">';
output += '                  <button type="button" class="btn btn-default btn-lg " id="renderButton">Render</button>';
output += '                  <button type="button" class="btn btn-default btn-lg btn-danger " id="abortButton">Abort!</button>';
output += '                  <div id="stl_buttons" class="pull-right" style="padding:5px 5px;">';
output += '                    <select id="render-type" style="padding:2px 4px;"></select>';
output += '                    <button type="button" class="btn btn-default btn-lg" id="stlButton">Export STL</button>';
output += '                  </div>';
output += '                  <div id="render-ongoing">Rendering <img id=busy src="imgs/busy2.gif"></div>';
output += '                  <div id="error-message"></div>';
output += '                </div>';
output += '              </div> <!-- paneContainer -->';
output += '            </div> <!-- resizable div -->';
output += '';
output += '          </div> <!-- blocklyDiv -->';
output += '        </div>';
output += '        <!-- Blockly Container (tab pane)-->';
output += '        <pre class="tab-pane content" id="openScadPre"></pre>';
output += '      </div>';
output += '      <!-- end tab content -->';
output += '    </div> <!-- end of the #editView content  -->';
output += '';
output += '    <div id="projectView" style="display:none">';
output += '      <!-- first row - a "my projects" label, a "New" button on the right -->';
output += '      <div style="width:100%; background-color:#bbbbff;">';
output += '        <span class="proj-header">My Projects</span>';
output += '        <button type="button" class="btn btn-default new-project spacey">New Project</button>';
output += '        <input type="text" class="search noselect" title="Filter" placeholder="Filter"  id="ptsearch"/>';
output += '        <button type="button" class="btn btn-default plist-cancel spacey">Cancel</button>';
output += '      </div>';
output += '        <table id="projTable" class="table table-striped sortable" style="padding:0px">';
output += '          <colgroup>';
output += '            <col style="width:80px">';
output += '            <col class="col-md-4">';
output += '            <col class="col-md-4">';
output += '            <!-- this was the column for shared attribute <col class="col-md-2"> -->';
output += '            <col class="col-md-4">';
output += '          </colgroup>';
output += '          <thead>';
output += '            <!-- <tr> -->';
output += '              <th class="sorttable_nosort" style="width:80px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>';
output += '              <th class="noselect">Project Name</th>';
output += '              <th class="noselect">Last Modified</th>';
output += '              <!-- this is the shared column <th>Shared</th> -->';
output += '              <th class="sorttable_nosort"></th>';
output += '         <!--    </tr> -->';
output += '          </thead> ';
output += '          <tbody id="projList">';
output += '          </tbody>';
output += '        </table>';
output += '        <button type="button" id="list-more" class="btn btn-default">More</button>';
output += '    </div> <!-- end of projectView -->';
output += '  </div> <!-- end of main -->';
output += '';
output += '';
output += '  <!-- html for Popups -->';
output += '  <!-- Popup login -->';
output += '  <div id="login-user" class="modal">';
output += '    <div class="modal-dialog modal-sm">';
output += '      <div class="modal-content">';
output += '        <form id="login-form">';
output += '          <fieldset>';
output += '            <div class="modal-header">';
output += '              <a href="#" data-dismiss="modal" class="close">';
output += '              </a>';
output += '              <h3>Sign in</h3>';
output += '            </div>';
output += '            <div class="modal-body">';
output += '              <div class="form-group"> ';
output += '                <label class="control-label" for="username">Username</label>';
output += '                <input class="username pull-right" id="login-username" type="text" autocomplete="off" name="username" maxlength="30" />';
output += '              </div>';
output += '              <div class="form-group"> ';
output += '                <label class="control-label" for="password">Password</label>';
output += '                <input type="password" name="password" id="login-password" autocomplete="off" class="password pull-right" maxlength="30"/>';
output += '              </div>';
output += '            </div>';
output += '            <div class="modal-footer">';
output += '              <div class="footer-error" id="login-error" style="margin-top:-5px; margin-bottom:12px; "></div>';
output += '              <div>';
output += '                <button id="logbut" class="button primary" type="submit" style="float: left;">Sign in</button> ';
output += '                <a href="#" id="forgot-password" style="float: right;">Forgot Password?</a>';
output += '              </div>';
output += '            </div>';
output += '';
output += '          </fieldset>';
output += '        </form>';
output += '';
output += '      </div><!-- /.modal-content -->';
output += '    </div><!-- /.modal-dialog -->';
output += '  </div><!-- /.modal -->';
output += '  <!-- End Login Popup -->';
output += '  <!-- Popup change Password -->';
output += '  <div id="change-password-modal" class="modal" data-backdrop="true">';
output += '    <div class="modal-dialog">';
output += '      <div class="modal-content">';
output += '        <form id="password-settings-form" novalidate>';
output += '          <fieldset>';
output += '            <div class="modal-header">';
output += '              <a href="#" data-dismiss="modal" data-target="#password-settings-modal" class="close">x';
output += '              </a>';
output += '              <h3>Change Password</h3>';
output += '              <span>When you\'re done, BlocksCAD will prompt you to log in again.</span>';
output += '            </div>';
output += '            <div class="modal-body">';
output += '              <div class="form-group"> ';
output += '                <label class="control-label mycl" for="password">Old Password</label>';
output += '                <input type="password" id="change-pw-old" name="old-password" autocomplete="off" class="password regform" maxlength="30"/>';
output += '                <div class="form-error">';
output += '                  <span class="password-error"></span>';
output += '                </div>';
output += '              </div>';
output += '              <div class="form-group"> ';
output += '                <label class="control-label mycl" for="password">New Password</label>';
output += '                <input type="password" id="change-pw-new" name="new-password" autocomplete="off" class="password regform" maxlength="30"/>';
output += '                <div class="form-error">';
output += '                  <span class="password-error"></span>';
output += '                </div>';
output += '              </div>';
output += '              <div class="form-group"> ';
output += '                <label class="control-label mycl" for="pass2">Retype Password</label>';
output += '                <input type="password" id="change-pw-2" autocomplete="off" class="password regform" maxlength="30"/>';
output += '                <div class="form-error">';
output += '                  <span class="password-confirm-error"></span>';
output += '                </div> ';
output += '              </div>';
output += '              <div class="buttons-right">';
output += '                <button class="button primary" type="submit">Submit</button> ';
output += '              </div>';
output += '            </div>';
output += '            <div class="modal-footer">';
output += '            <span class="footer-error" id="pw-error"></span>';
output += '            </div>';
output += '          </fieldset>';
output += '        </form>';
output += '';
output += '      </div><!-- /.modal-content -->';
output += '    </div><!-- /.modal-dialog -->';
output += '  </div><!-- /.modal -->';
output += '  <!-- end change password popup -->';
output += '  <!-- Popup change Email -->';
output += '  <div id="change-email-modal" class="modal" data-backdrop="true">';
output += '    <div class="modal-dialog">';
output += '      <div class="modal-content">';
output += '        <form id="email-settings-form" novalidate>';
output += '          <fieldset>';
output += '            <div class="modal-header">';
output += '              <a href="#" data-dismiss="modal" data-target="#email-settings-modal" class="close">x';
output += '              </a>';
output += '              <h3>Change Email</h3>';
output += '            </div>';
output += '            <div class="modal-body">';
output += '              <p id="current-email">Current Email is: </p>';
output += '              <div class="form-group"> ';
output += '                <label class="control-label mycl" for="email">New Email</label>';
output += '                <input type="text" id="new-email" name="new-email" autocomplete="off" class="email regform" size="30"/>';
output += '                <div class="form-error">';
output += '                  <span class="email-error"></span>';
output += '                </div> ';
output += '              </div>';
output += '              <div class="form-group"> ';
output += '                <label class="control-label mycl" for="password">Password</label>';
output += '                <input type="password" id="change-email-pw" name="password" autocomplete="off" class="password regform" maxlength="30"/>';
output += '              </div> ';
output += '              <div class="buttons-right">';
output += '                <button class="button primary" type="submit">Submit</button> ';
output += '              </div>';
output += '            </div>';
output += '            <div class="modal-footer">';
output += '            <span class="footer-error" id="email-pw-error"></span>';
output += '            </div>';
output += '          </fieldset>';
output += '        </form>';
output += '';
output += '      </div><!-- /.modal-content -->';
output += '    </div><!-- /.modal-dialog -->';
output += '  </div><!-- /.modal -->';
output += '  <!-- end change password popup -->';
output += '  <!-- Popup register user -->';
output += '  <div id="register-user" class="modal">';
output += '    <div class="modal-dialog">';
output += '      <div class="modal-content modal-md">';
output += '        <form id="register-form">';
output += '          <fieldset>';
output += '            <div class="modal-header">';
output += '              <a href="#" data-dismiss="modal" class="close">x';
output += '              </a>';
output += '              <h3>Register New User</h3>';
output += '            </div>';
output += '            <div class="modal-body">';
output += '              <div class="form-group"> ';
output += '                <label class="control-label mycl" for="username">Username</label>';
output += '                <input class="username regform" id="register-username" type="text" autocomplete="off" name="username" maxlength="30" />';
output += '                <div class="form-error">';
output += '                  <span id="username-error"></span>';
output += '                </div>';
output += '              </div>';
output += '              <div class="form-group"> ';
output += '                <label class="control-label mycl" for="password">Password</label>';
output += '                <input type="password" id="register-password" name="password" autocomplete="off" class="password regform" maxlength="30"/>';
output += '                <div class="form-error">';
output += '                  <span class="password-error"></span>';
output += '                </div>';
output += '              </div>';
output += '              <div class="form-group"> ';
output += '                <label class="control-label mycl" for="pass2">Retype Password</label>';
output += '                <input type="password" id="pass2" autocomplete="off" class="password regform" maxlength="30"/>';
output += '                <div class="form-error">';
output += '                  <span class="password-confirm-error"></span>';
output += '                </div> ';
output += '              </div>';
output += '              <div class="form-group"> ';
output += '                <label class="control-label mycl" for="email">Email</label>';
output += '                <input type="text" id="register-email" name="email" autocomplete="off" class="email regform"/>';
output += '                <div class="form-error">';
output += '                  <span class="email-error"></span>';
output += '                </div> ';
output += '              </div>';
output += '            </div>';
output += '            <div class="modal-footer">';
output += '              <span class="error"></span>';
output += '              <div class="buttons-right">';
output += '                <button class="button primary" type="submit">Register</button> ';
output += '              </div>';
output += '            </div>';
output += '';
output += '          </fieldset>';
output += '        </form>';
output += '';
output += '      </div><!-- /.modal-content -->';
output += '    </div><!-- /.modal-dialog -->';
output += '  </div><!-- /.modal -->';
output += '  <!-- end of registration popup -->';
output += '  <!-- Popup  password recovery-->';
output += '  <div id="pw-recover" class="modal">';
output += '    <div class="modal-dialog">';
output += '      <div class="modal-content modal-md">';
output += '        <form id="pw-recover-form" novalidate>';
output += '          <fieldset>';
output += '            <div class="modal-header">';
output += '              <a href="#" data-dismiss="modal" class="close">x';
output += '              </a>';
output += '              <h3>Password Recovery</h3>';
output += '            </div>';
output += '            <div class="modal-body">';
output += '              <p><b>Whoops, forget your password?</b></p>';
output += '              <p>No problem, just enter your username OR the email address associated with your account and we\'ll send you an email with instructions to reset your password. </p>';
output += '              <div class="form-group"> ';
output += '                <label class="control-label mycl" for="username">Enter Username</label>';
output += '                <input class="username regform" id="recover-username" type="text" autocomplete="off" name="username" maxlength="30" />';
output += '                <div>';
output += '                  <span class="email-error" id="un-recover-error" style="color:#b04444;"></span>';
output += '                </div>';
output += '              </div><p>or</p>';
output += '              <div class="form-group"> ';
output += '                <label class="control-label mycl" for="email">Enter Email</label>';
output += '                <input type="text" id="recover-email" name="email" autocomplete="off" class="email regform"/>';
output += '                <div>';
output += '                  <span class="email-error" id="em-recover-error" style="color:#b04444;"></span>';
output += '                </div> ';
output += '              </div>';
output += '            </div>';
output += '            <div class="modal-footer">';
output += '              <div class="buttons-right">';
output += '                <button class="button primary" type="submit">Send me a new password reset link!</button> ';
output += '              </div>';
output += '            </div>';
output += '';
output += '          </fieldset>';
output += '        </form>';
output += '';
output += '      </div><!-- /.modal-content -->';
output += '    </div><!-- /.modal-dialog -->';
output += '  </div><!-- /.modal --> <!-- end of password recovery popup -->';
output += '  <!-- password recovery email sent modal -->';
output += '  <div id="recover-email-sent" class="modal">';
output += '    <div class="modal-dialog modal-sm">';
output += '      <div class="modal-content">';
output += '        <div class="modal-header">';
output += '          <a href="#" data-dismiss="modal" class="close">x';
output += '          </a>';
output += '          <h3>Password Recovery Email has been Sent</h3>';
output += '        </div>';
output += '        <div class="modal-body">';
output += '          We\'ve sent an email to the address associated with your account with a link to reset your password.  If you don\'t see it, check your spam folder.';
output += '        </div>';
output += '      </div>';
output += '    </div>';
output += '  </div> <!-- end of password recovery email sent modal -->';
output += '  <!--  online delete confirm popup -->';
output += '  <div id="online-delete-confirm" class="modal" data-backdrop="false">';
output += '    <div class="modal-dialog modal-sm" style="width:400px">';
output += '      <div class="modal-content">';
output += '        <div class="modal-header">';
output += '          <a href="#" data-dismiss="modal" class="close">x';
output += '          </a>';
output += '          <h4 class="modal-title">Are you sure you want to delete this project?</h4>';
output += '        </div>';
output += '        <div class="modal-footer">';
output += '            <button id="toss-it" class="button btn-lg btn-default primary pull-left" style="margin-left:90px" type="button" data-dismiss="modal" data-target="#online-delete-confirm">Sure</button> ';
output += '            <button id="whatthe" class="button btn-default btn-lg primary" style="margin-right:90px" type="button" data-dismiss="modal" data-target="#online-delete-confirm">Cancel</button> ';
output += '        </div>';
output += '      </div><!-- /.modal-content -->';
output += '    </div><!-- /.modal-dialog -->';
output += '  </div> <!-- end of online delete-confirm popup -->';
output += '';
output += '  <!--  delete account confirm popup -->';
output += '  <div id="delete-account-confirm" class="modal">';
output += '    <div class="modal-dialog modal-sm" style="width:600px">';
output += '      <div class="modal-content">';
output += '        <div class="modal-header">';
output += '          <h4>Are you sure you want to delete your BlocksCAD account?</h4>';
output += '        </div>';
output += '        <div class="modal-footer">';
output += '            <button id="delete-account-yes" class="button btn-lg btn-default primary pull-left" style="margin-left:10%" type="button" data-dismiss="modal" data-target="#delete-account-confirm">Yes - Next Step</button> ';
output += '            <button class="button btn-default btn-lg primary" style="margin-right:10%" type="button" data-dismiss="modal" data-target="#delete-account-confirm">Keep My Account</button> ';
output += '        </div>';
output += '      </div><!-- /.modal-content -->';
output += '    </div><!-- /.modal-dialog -->';
output += '  </div>';
output += '  <!-- end of delete-confirm popup -->';
output += '  <!--  delete account popup -->';
output += '  <div id="delete-account-modal" class="modal">';
output += '    <div class="modal-dialog modal-sm" style="width:600px">';
output += '      <div class="modal-content">';
output += '        <form id="delete-account-form" novalidate>';
output += '          <fieldset>';
output += '            <div class="modal-header">';
output += '              <a href="#" data-dismiss="modal" data-target="#delete-account-modal" class="close">x';
output += '              </a>';
output += '              <h4>Delete My Account</h4>';
output += '              <h3>In about 48 hours your account will be <b>permanently deleted.</b></h3>';
output += '              <p>If you change your mind, just sign in to your account within the next 48 hours.</p>';
output += '            </div>';
output += '            <div class="modal-body">';
output += '              <div class="form-group"> ';
output += '                <label  for="password">Enter password to confirm:  </label>';
output += '                <input type="password" id="del-acct-pw" name="password" autocomplete="off" class="password regform" maxlength="30"/>';
output += '                <div class="form-error">';
output += '                  <span class="password-error"></span>';
output += '                </div>';
output += '              </div>';
output += '               <div class="buttons-right">';
output += '                <button class="button primary btn-default btn-lg" type="submit">Delete Account and Sign Out</button> ';
output += '              </div>';
output += '            </div>';
output += '            <div class="modal-footer">';
output += '            <span class="footer-error" id="da-pw-error"></span>';
output += '            </div>';
output += '          </fieldset>';
output += '        </form>';
output += '      </div><!-- /.modal-content -->';
output += '    </div><!-- /.modal-dialog -->';
output += '  </div>';
output += '  <!-- end of delete account popup -->';
output += '  <!--  delete reactivate popup -->';
output += '  <div id="delete-reactivate" class="modal">';
output += '    <div class="modal-dialog modal-sm" style="width:500px">';
output += '      <div class="modal-content">';
output += '        <div class="modal-header">';
output += '          <a href="#" data-dismiss="modal" class="close">x';
output += '          </a>';
output += '          <h4><b>Your account will not be deleted</b></h4>';
output += '        </div>';
output += '        <div class="modal-body">';
output += '          <p> Your account was scheduled for deletion but you logged in. Your account has been reactivated. ';
output += '          If you didn’t request for your account to be deleted, you should <a href="#" data-toggle="modal" data-target="#change-password-modal" data-dismiss="modal" data-target="#delete-reactivate">change your password</a> to make sure your account is secure.</p>';
output += '        </div>';
output += '        <div class="modal-footer">';
output += '            <button class="button btn-default btn-lg primary" style="margin-right:10%" type="button" data-dismiss="modal" data-target="#delete-reactivate">Continue</button> ';
output += '        </div>';
output += '      </div><!-- /.modal-content -->';
output += '    </div><!-- /.modal-dialog -->';
output += '  </div>';
output += '  <!-- end of delete reactivate popup -->';
output += '  <!-- About popup -->';
output += '  <div id="about-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="about-modal" aria-hidden="true">';
output += '    <div class="modal-dialog">';
output += '      <div class="modal-content">';
output += '    <div class="modal-header">';
output += '      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
output += '      <h3 class="modal-title">BlocksCAD';
output += '      <small>Easy, Open-Source Solid CAD for Everyone!</small></h3>';
output += '    </div>';
output += '    <div class="modal-body">';
output += '      <div>';
output += '        <p>Version ' + Blockscad.Version + ' (2016/04/27)</p>';
output += '        <br>';
output += '        <p>Want to help? <a href="https://github.com/EinsteinsWorkshop/BlocksCAD">Get involved!</a></p>';
output += '        <p>Have feedback? <a href="mailto://blockscad@einsteinsworkshop.com">blockscad@einsteinsworkshop.com</a>';
output += '          <p><small><small>Developed with the sponsorship of the Defense Advanced Research Projects Agency (DARPA) and delivered to the U.S. Government with Unlimited Rights as defined in DFARS 252.227-7013.<br>Approved for Public Release, Distribution Unlimited.<br>Created by Katy Hamilton, J. Yoder, and Matthew Minuti. Copyright and Trademark 2014-2015 H3XL, Inc.</small></small>';
output += '          </p>';
output += '      </div>';
output += '    </div>';
output += '    <div class="modal-footer">';
output += '      <div class="row">';
output += '        <div class="col-md-4">';
output += '          <a href="http://www.gnu.org/licenses/gpl-3.0-standalone.html" target="_blank">Licensed GPLv3 or later</a></div>';
output += '        <div class="col-md-4">';
output += '          <a href="TOS.html" target="_blank">Terms of Service</a></div>';
output += '        <div class="col-md-4">';
output += '          <a href="privacy.html" target="_blank">Privacy Policy</a></div>';
output += '      </div>';
output += '    </div>';
output += '  </div>';
output += '    </div>';
output += '  </div>';
output += '  <!-- Message popup -->';
output += '  <div id="message-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="message-modal" aria-hidden="true">';
output += '    <div class="modal-dialog modal-sm">';
output += '      <div class="modal-content">';
output += '        <div class="modal-header">';
output += '          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
output += '        </div>';
output += '        <div id="message-text" class="modal-body">Display a message here.';
output += '        </div>';
output += '      </div>';
output += '    </div>';
output += '  </div>';
output += '  <!-- end of popups -->   ';

return output;
}