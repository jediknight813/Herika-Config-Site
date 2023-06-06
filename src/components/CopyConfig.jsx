/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";


// eslint-disable-next-line react/prop-types
const CopyConfig = ({ configState }) => {

  const [Mimic3Toggle, setMimic3Toggle] = useState()
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(Config);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };


  const {
    OPENAI_API_KEY,
    AZURE_API_KEY,
    ELEVENLABS_API_KEY,
    DEBUG_MODE,
    PLAYER_NAME,
    HERIKA_PERS,
    PROMPT_HEAD,
    AZURETTS_CONF,
    MIMIC3,
    MIMIC3_CONF,
    ELEVEN_LABS,
    STTFUNCTION,
    TTSFUNCTION,
    TTSLANGUAGE_AZURE,
    TTSLANGUAGE_WHISPER,
    OPENAI_MAX_TOKENS,
  } = configState;


  useEffect(() => {

    // Check if mimic3 is being used for tts
    if (TTSFUNCTION !== "mimic3") {
      setMimic3Toggle("//")
    }
    else{
      setMimic3Toggle("")
    }

  }, [configState, TTSFUNCTION]);



  var Config = `
<?php

$OPENAI_API_KEY="${OPENAI_API_KEY}";
$AZURE_API_KEY="${AZURE_API_KEY}";
$ELEVENLABS_API_KEY="${ELEVENLABS_API_KEY}";

$DEBUG_MODE=${DEBUG_MODE ? 'true' : 'false'};
$PLAYER_NAME="${PLAYER_NAME}";
$HERIKA_PERS="${HERIKA_PERS.replace("'", "\\'").replace('"', "")}";
$PROMPT_HEAD="${PROMPT_HEAD}";

$AZURETTS_CONF["fixedMood"]="${AZURETTS_CONF.fixedMood}";
$AZURETTS_CONF["region"]="${AZURETTS_CONF.region}";
$AZURETTS_CONF["voice"]="${AZURETTS_CONF.voice}";
$AZURETTS_CONF["volume"]="${AZURETTS_CONF.volume}";
$AZURETTS_CONF["rate"]="${AZURETTS_CONF.rate}";
$AZURETTS_CONF["countour"]="${AZURETTS_CONF.countour}";
$AZURETTS_CONF["validMoods"]=array(${AZURETTS_CONF.validMoods.map((mood) => `"${mood}"`).join(', ')});

${Mimic3Toggle}$MIMIC3="${MIMIC3}";
$MIMIC3_CONF["voice"]="${MIMIC3_CONF.voice}";
$MIMIC3_CONF["rate"]="${MIMIC3_CONF.rate}";
$MIMIC3_CONF["volume"]="${MIMIC3_CONF.volume}";

$ELEVEN_LABS["voice_id"]="${ELEVEN_LABS.voice_id}";
$ELEVEN_LABS["optimize_streaming_latency"]="${ELEVEN_LABS.optimize_streaming_latency}";
$ELEVEN_LABS["model_id"]="${ELEVEN_LABS.model_id}";
$ELEVEN_LABS["stability"]="${ELEVEN_LABS.stability}";
$ELEVEN_LABS["similarity_boost"]="${ELEVEN_LABS.similarity_boost}";

$STTFUNCTION="${STTFUNCTION}";
$TTSFUNCTION="${TTSFUNCTION}";

$TTSLANGUAGE_AZURE="${TTSLANGUAGE_AZURE}";
$TTSLANGUAGE_WHISPER="${TTSLANGUAGE_WHISPER}";

$OPENAI_MAX_TOKENS="${OPENAI_MAX_TOKENS}";

?>
`


  return (
    <>
      <div className="w-[90%] self-center h-auto overflow-x-hidden bg-slate-800 p-8 rounded-lg mt-10">
          <pre>
          {Config}
        </pre>
      </div>
      <button className="btn btn-primary w-[200px] self-center mb-5 mt-5" onClick={copyToClipboard}>{isCopied ? 'Copied!' : 'Copy to Clipboard'}</button>
    </>
  )
}

export default CopyConfig
