import os
from pathlib import Path

PRODUCTION = (os.getenv('PRODUCTION', 'False') == 'True')
BASE_DIR = Path(__file__).resolve().parent.parent
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY')


INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.gis',

    'rest_framework.authtoken',
    'rest_framework',
    'django_jalali',
    'corsheaders',
    'imagekit',
    'ckeditor',
    'ckeditor_uploader',

    'users',
    'common',
    'magazine',
    'payments',
    'financial',
    'locations',
    'timetable',
    'community',
    'gift_codes',
    'transactions',
    'consultations',

]


MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'goodmood.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'goodmood.wsgi.application'
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


LOCALE_PATHS = [
    os.path.join(BASE_DIR, 'users', 'locale'),
    os.path.join(BASE_DIR, 'goodmood', 'locale'),
    os.path.join(BASE_DIR, 'magazine', 'locale'),
    os.path.join(BASE_DIR, 'gift_codes', 'locale'),
    os.path.join(BASE_DIR, 'consultations', 'locale'),
    os.path.join(BASE_DIR, 'common', 'locale'),
]


REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication'
    ],
    'UPLOADED_FILES_USE_URL': False,
    'DATETIME_FORMAT': "%Y-%m-%d - %H:%M:%S",
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
    )

}


LANGUAGE_CODE = 'fa'
TIME_ZONE = 'Asia/Tehran'
USE_I18N = True
USE_L10N = True
USE_TZ = False

AUTH_USER_MODEL = 'users.User'


# -------------------------------------------------------------- Google
GOOGLE_OAUTH2_CLIENT_ID = os.environ.get('GOOGLE_OAUTH2_CLIENT_ID')
GOOGLE_OAUTH2_CLIENT_SECRET = os.environ.get('GOOGLE_OAUTH2_CLIENT_SECRET')
GOOGLE_ID_TOKEN_INFO_URL = 'https://www.googleapis.com/oauth2/v3/tokeninfo'
GOOGLE_ACCESS_TOKEN_OBTAIN_URL = 'https://oauth2.googleapis.com/token'
GOOGLE_USER_INFO_URL = 'https://www.googleapis.com/oauth2/v3/userinfo'
GOOGLE_BACKEND_REDIRECT_URL = os.environ.get('GOOGLE_BACKEND_REDIRECT_URL')
GOOGLE_FRONTEND_REDIRECT_URL = os.environ.get('SITE_URL')
# --------------------------------------------------------------/Google

KAVENEGAR_TOKEN = os.environ.get('KAVENEGAR_TOKEN')
OTP_EXPIRATION_TIME_SECONDS = 15
OTP_LENGTH = 4
SEND_OTP_BY_SMS = False
AVATAR_COMPRESS_SIZE = (220, 220)
NUMBER_OF_WEEK_DAYS = 31
LAST_ORDER_TO_CLOSE_CHUNK = 1  # By hour. Between 1 to 4
CAPACITY_PER_CHUNK = 5
PAYMENT_VALUE = {'max': 100000000, 'min': 0}  # Toman

TEST_EXPIRATION_TIME = 5

MEDIA_ROOT = '/srv/media/'
STATIC_ROOT = '/srv/static/'
STATIC_URL = '/static/'
MEDIA_URL = '/media/'
CKEDITOR_UPLOAD_PATH = "/srv/media/blog/uploads/"

CKEDITOR_CONFIGS = {
    'default': {
        'toolbar': 'full',
        'height': 600,
        'width': 1200,
    },
}

DATABASES = {
    'default': {
        'ENGINE': 'django.contrib.gis.db.backends.postgis',
        'NAME': os.environ.get('POSTGRES_DB'),
        'USER': os.environ.get('POSTGRES_USER'),
        'PASSWORD': os.environ.get('POSTGRES_PASSWORD'),
        'HOST': os.environ.get('POSTGRES_HOST', 'localhost'),
        'PORT': '5432',
    }
}

SITE_URL = os.environ.get('SITE_URL')

ZARINPAL_MERCHANT = os.environ.get('ZARINPAL_MERCHANT'),
ZARINPAL_CALLBACK_URL = os.environ.get('ZARINPAL_CALLBACK_URL'),
ZARINPAL_REQUEST = os.environ.get('ZARINPAL_REQUEST'),

CORS_ALLOW_CREDENTIALS = False
ALLOWED_HOSTS = [os.environ.get('HOST')]
CSRF_TRUSTED_ORIGINS = [f"https://{os.environ.get('HOST')}"]



if PRODUCTION:
    DEBUG = True
else:
    DEBUG = False
