import './style.css';
import HeaderFooter from '../../layout/Header_Footer';

function SignIn() {
    const signIn = document.createElement('div');
    signIn.className = 'Body';

    signIn.innerHTML = `
        <div class="SignIn">
            <div class="content">
                <div class="heading"><b>Đăng nhập</b></div>
                <div class="form-group">Email<div class="class1">*</div></div>
                <input type="Email" placeholder="Email Address" >
                <div class="form-group">Password<div class="class1">*</div></div>
                <input type="Password" placeholder="Password">
                <input type="checkbox" class="class4"> 
                <div class="remember-me"> Ghi nhớ mật khẩu</div>
                <button class="forgot-password">Quên mật khẩu ?</button> 
                <a class="login" href="./user.html">Đăng Nhập</a>
                <div class="line"></div>
                <div class="class2">OR</div>
                <div class="line"></div>
                <input type="button" class="login class3" value="Đăng nhập bằng google">
            </div>
            <div class="line1"></div>
            <div class="content1">
                <div class="heading"><b>Đăng ký</b></div>
                <div class="form-group">Họ và tên<div class="class1">*</div></div>
                <input type="text" placeholder="Nguyễn Văn A">
                <div class="form-group">Email<div class="class1">*</div></div>
                <input type="Email" placeholder="nguyenvana123@gmail.com">
                <div class="form-group">Mật khẩu<div class="class1">*</div></div>
                <input type="Password" placeholder="Password">
                <input type="checkbox" class="class4"> 
                <div class="remember-me"> Bạn có đồng ý với điều khoản dịch vụ và chính sách bảo mật của chúng tôi ? </div>
                <a class="login" href="./user.html">Đăng Ký</a>
                <div class="line"></div>
                <div class="class2">OR</div>
                <div class="line"></div>
                <input type="button" class="login class3" value="Đăng ký bằng google">
            </div>
        </div>	
    `;

    return signIn;
}



document.body.appendChild(HeaderFooter(SignIn));