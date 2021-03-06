FSH���     tex      tex_u      tex_v      VSFlags     FSAlphaFlags     FSMiscFlags       smooth in vec4 v_color0;
in vec2 v_texcoord0;
uniform sampler2D tex;
uniform sampler2D tex_u;
uniform sampler2D tex_v;
uniform vec4 VSFlags;
uniform vec4 FSAlphaFlags;
uniform vec4 FSMiscFlags;
void main ()
{
  vec4 color_1;
  color_1 = v_color0;
  if ((VSFlags.w > 0.0)) {
    if ((FSMiscFlags.y > 0.0)) {
      vec3 tmpvar_2;
      tmpvar_2.x = (texture (tex, v_texcoord0).x - 0.0625);
      tmpvar_2.y = (texture (tex_u, v_texcoord0).x - 0.5);
      tmpvar_2.z = (texture (tex_v, v_texcoord0).x - 0.5);
      if ((FSMiscFlags.x > 0.0)) {
        color_1.xyz = (mat3(1.0, 1.0, 1.0, 0.0, -0.343, 1.765, 1.4, -0.711, 0.0) * tmpvar_2);
      } else {
        color_1.xyz = (mat3(1.164, 1.164, 1.164, 0.0, -0.392, 2.017, 1.596, -0.813, 0.0) * tmpvar_2);
      };
      color_1.w = 1.0;
    } else {
      vec4 texture_color_3;
      vec4 tmpvar_4;
      tmpvar_4 = texture (tex, v_texcoord0);
      texture_color_3 = tmpvar_4;
      if ((FSAlphaFlags.z > 0.0)) {
        float tmpvar_5;
        tmpvar_5 = abs(FSAlphaFlags.y);
        if ((tmpvar_5 < 1e-5)) {
          discard;
        };
        float tmpvar_6;
        tmpvar_6 = abs((FSAlphaFlags.y - 1.0));
        if (((tmpvar_6 < 1e-5) && (tmpvar_4.w >= FSAlphaFlags.x))) {
          discard;
        };
        float tmpvar_7;
        tmpvar_7 = abs((FSAlphaFlags.y - 2.0));
        if (((tmpvar_7 < 1e-5) && (tmpvar_4.w != FSAlphaFlags.x))) {
          discard;
        };
        float tmpvar_8;
        tmpvar_8 = abs((FSAlphaFlags.y - 3.0));
        if (((tmpvar_8 < 1e-5) && (tmpvar_4.w > FSAlphaFlags.x))) {
          discard;
        };
        float tmpvar_9;
        tmpvar_9 = abs((FSAlphaFlags.y - 4.0));
        if (((tmpvar_9 < 1e-5) && (tmpvar_4.w <= FSAlphaFlags.x))) {
          discard;
        };
        float tmpvar_10;
        tmpvar_10 = abs((FSAlphaFlags.y - 5.0));
        if (((tmpvar_10 < 1e-5) && (tmpvar_4.w == FSAlphaFlags.x))) {
          discard;
        };
        float tmpvar_11;
        tmpvar_11 = abs((FSAlphaFlags.y - 6.0));
        if (((tmpvar_11 < 1e-5) && (tmpvar_4.w < FSAlphaFlags.x))) {
          discard;
        };
      };
      bool tmpvar_12;
      if ((VSFlags.z > 0.0)) {
        bvec3 tmpvar_13;
        tmpvar_13 = equal (tmpvar_4.xyz, vec3(0.0, 0.0, 0.0));
        tmpvar_12 = ((tmpvar_13.x && tmpvar_13.y) && tmpvar_13.z);
      } else {
        tmpvar_12 = bool(0);
      };
      if (tmpvar_12) {
        discard;
      };
      if ((FSMiscFlags.w > 0.0)) {
        texture_color_3.w = 1.0;
      };
      if ((texture_color_3.w == 0.0)) {
        discard;
      };
      if ((FSMiscFlags.z > 0.0)) {
        color_1 = (color_1 * texture_color_3);
      } else {
        color_1.xyz = (color_1.xyz * tmpvar_4.xyz);
        color_1.w = texture_color_3.w;
      };
    };
  };
  gl_FragColor = color_1;
}

 