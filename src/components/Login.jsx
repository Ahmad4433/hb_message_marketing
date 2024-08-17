import React from "react";

const Login = () => {
  return (
    <div class="account-pages">
      <div class="toast-container position-absolute p-3 top-0 end-0">
        <div
          class="toast  fade  border-bottom border-primary overflow-hidden mt-3"
          id="alert-message"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="toast-body">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0 me-2">
                <i class="ri-user-smile-line align-middle"></i>
              </div>
              <div class="flex-grow-1">
                <h6 class="mb-0"></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-11">
            <div class="auth-full-page-content d-flex min-vh-100 py-sm-5 py-4">
              <div class="w-100">
                <div class="d-flex flex-column h-100 py-0 py-xl-4">
                  <div class="text-center mb-5">
                    <a href="index.html">
                      <span class="logo-lg">
                        <img
                        //   src="assets/icons/nu-payments.png"
                          alt=""
                          height="60"
                        />
                      </span>
                    </a>
                  </div>

                  <div class="card my-auto overflow-hidden">
                    <div class="row g-0">
                      <div class="col-lg-6">
                        <div class="p-lg-5 p-4">
                          <div class="text-center">
                            <h5 class="mb-0">Welcome Back !</h5>
                            <p class="text-muted mt-2">
                              Sign in to continue to nuPayments.
                            </p>
                          </div>

                          <div class="mt-4">
                            <form class="auth-input" onsubmit="login(event)">
                              <div class="mb-3">
                                <label for="email" class="form-label">
                                  Email
                                </label>
                                <input
                                  type="email"
                                  required
                                  class="form-control"
                                  id="email"
                                  placeholder="Enter email"
                                />
                              </div>

                              <div class="mb-2">
                                <label for="userpassword" class="form-label">
                                  Pin
                                </label>
                                <div class="position-relative auth-pass-inputgroup mb-3">
                                  <input
                                    type="password"
                                    class="form-control pe-5 password-input"
                                    required
                                    placeholder="Enter pin"
                                    id="password-input"
                                  />
                                  <button
                                    class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                    type="button"
                                    id="password-addon"
                                  >
                                    <i class="las la-eye align-middle fs-18"></i>
                                  </button>
                                </div>
                              </div>

                              <div class="form-check form-check-primary fs-16 py-2">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="remember-check"
                                />
                                <div class="float-end">
                                  <a
                                    href="auth-resetpassword.html"
                                    class="text-muted text-decoration-underline fs-14"
                                  >
                                    Forgot your password?
                                  </a>
                                </div>
                                <label
                                  class="form-check-label fs-14"
                                  for="remember-check"
                                >
                                  Remember me
                                </label>
                              </div>

                              <div class="mt-2">
                                <button
                                  class="btn btn-primary btn-load w-100"
                                  id="login-btn"
                                  type="submit"
                                >
                                  Log In
                                </button>
                              </div>

                              <div class="mt-4 text-center">
                                <p class="mb-0">
                                  Don't have an account ?{" "}
                                  <a
                                    href="/auth-signup.html"
                                    class="fw-medium text-primary text-decoration-underline"
                                  >
                                    {" "}
                                    Signup now{" "}
                                  </a>{" "}
                                </p>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-6">
                        <div class="d-flex h-100 bg-auth align-items-end">
                          <div class="p-lg-5 p-4">
                            <div class="bg-overlay bg-primary"></div>
                            <div class="p-0 p-sm-4 px-xl-0 py-5">
                              <div
                                id="reviewcarouselIndicators"
                                class="carousel slide auth-carousel"
                                data-bs-ride="carousel"
                              >
                                <div class="carousel-indicators carousel-indicators-rounded"></div>

                                <div class="carousel-inner mx-auto">
                                  <div class="carousel-item active">
                                    <div class="testi-contain text-center">
                                      <h5 class="fs-20 text-white mb-0">
                                        “nuPayments accelerates your business”
                                      </h5>
                                      <p class="fs-15 text-white-50 mt-2 mb-0">
                                        nuPayments serves as a seamless
                                        connection to integrate your business
                                        into the digital realm of payments. Our
                                        solutions enable the adoption of a
                                        borderless business model, facilitating
                                        tools to help boost your business,
                                        increase revenue and business growth.
                                        Come, join the journey!
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="mt-5 text-center">
                    <p class="mb-0 text-muted">©</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
