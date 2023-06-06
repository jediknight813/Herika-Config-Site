import CopyConfig from './CopyConfig'
import { useState } from 'react';


const HerikaConfigForm = () => {


  const [settingsState, setSettingsState] = useState("")
  const [state, setState] = useState({
    OPENAI_API_KEY: '',
    AZURE_API_KEY: '',
    ELEVENLABS_API_KEY: '',
    DEBUG_MODE: false,
    PLAYER_NAME: 'Prisoner',
    HERIKA_PERS: 'You are Herika, a Breton female who likes jokes and sarcastic comments.',
    PROMPT_HEAD: `Let's roleplay in the Universe of Skyrim. You don't describe things or actions, just chat as your character`,
    AZURETTS_CONF: {
      fixedMood: '',
      region: 'westeurope',
      voice: 'en-US-NancyNeural',
      volume: '25',
      rate: '1.2',
      countour: '(11%, +15%) (60%, -23%) (80%, -34%)',
      validMoods: ['whispering', 'default'],
    },
    MIMIC3: 'http://127.0.0.1:59125',
    MIMIC3_CONF: {
      voice: 'en_US/ljspeech_low',
      rate: '1.25',
      volume: '80',
    },
    ELEVEN_LABS: {
      voice_id: 'EXAVITQu4vr4xnSDxMaL',
      optimize_streaming_latency: '0',
      model_id: 'eleven_monolingual_v1',
      stability: '0.75',
      similarity_boost: '0.75',
    },
    STTFUNCTION: 'azure',
    TTSFUNCTION: 'azure',
    TTSLANGUAGE_AZURE: 'en-US',
    TTSLANGUAGE_WHISPER: 'en',
    OPENAI_MAX_TOKENS: '48',
  });


  return (
    <div className=' flex flex-col gap-2'>
        {/* select config tab */}
        <div className="join join-vertical lg:join-horizontal self-center mt-2">
          <button className="btn join-item btn-secondary" onClick={() => setSettingsState("TTS")}>Text-To-Speech</button>
          <button className="btn join-item btn-accent" onClick={() => setSettingsState("STT")}>Speech-To-Text</button>
          <button className="btn join-item btn-success text-white hover:opacity-90" onClick={() => setSettingsState("TG")}>Text-Generation</button>
        </div>

        { settingsState == "TTS" &&
          <>
            <h1 className='text-4xl text-white uppercase self-center mt-10 font-bold'>Text To Speech Config </h1>

            <div className='w-[90%] self-center flex flex-col'> 

            
            </div>
          </>
        }

        { settingsState == "STT" &&
          <>
            <h1 className='text-4xl text-white uppercase self-center mt-10 font-bold'>Speech To Text Config </h1>
            <div className='w-[90%] self-center flex flex-col'> 
            
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Select STT provider</span>
                </label>
                <select onChange={(e) => setState((prevState) => ({ ...prevState, STTFUNCTION: e.target.value }))} className="select select-bordered">
                  <option value="azure">azure</option>
                  <option value="whisper">whisper</option>
                </select>
              </div>

              { state.STTFUNCTION == "whisper" &&
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">OpenAi Api Key</span>
                  </label>
                  <input value={state.OPENAI_API_KEY} onChange={(e) => setState((prevState) => ({ ...prevState, OPENAI_API_KEY: e.target.value }))} type="text" className="input input-bordered w-full max-w-xs" />
                </div>
              }

              { state.STTFUNCTION == "azure" &&
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Azure Api Key</span>
                  </label>
                  <input value={state.AZURE_API_KEY} onChange={(e) => setState((prevState) => ({ ...prevState, AZURE_API_KEY: e.target.value }))} type="text" className="input input-bordered w-full max-w-xs" />
                </div>
              }

            </div>
          </>
        }

        { settingsState == "TG" &&
          <>
            <h1 className='text-4xl text-white uppercase self-center mt-10 font-bold'>Text Generation Config</h1>

            <div className='w-[90%] self-center flex flex-col bg-white'> 

                <label className="">
                  <span className="">OpenAi Api Key</span>
                </label>
                <input className="w-[80%]" value={state.OPENAI_API_KEY} onChange={(e) => setState((prevState) => ({ ...prevState, OPENAI_API_KEY: e.target.value }))} type="text" />

                <label className="label">
                  <span className="label-text">Herika Personality</span>
                </label>
                <textarea className="h-[200px] min-h-18 w-[80%]" value={state.HERIKA_PERS} onChange={(e) => setState((prevState) => ({ ...prevState, HERIKA_PERS: e.target.value }))} type="text" />

                <label className="">
                  <span className="">Max Tokens</span>
                </label>
                <input className=" w-[80%]" type={"number"} value={state.OPENAI_MAX_TOKENS} onChange={(e) => setState((prevState) => ({ ...prevState, OPENAI_MAX_TOKENS: e.target.value }))} />


            </div>

          </>
        }   
        <CopyConfig configState={state} />
    </div>
  )
}

export default HerikaConfigForm


