FSH���     tex      k   in vec2 v_texcoord0;
uniform sampler2D tex;
void main ()
{
  gl_FragColor = texture (tex, v_texcoord0);
}

 